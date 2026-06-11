import List "mo:core/List";
import Map "mo:core/Map";
import Types "../types/payment";
import Common "../types/common";

module {
  // Pricing constants in cents
  let STARTER_CENTS : Nat = 9900;
  let PROFESSIONAL_CENTS : Nat = 19900;
  let ENTERPRISE_CENTS : Nat = 29900;
  let WEB_DESIGN_CENTS : Nat = 49900;

  // 15-day trial in nanoseconds
  let TRIAL_DAYS : Nat = 15;
  let _DAY_NS : Int = 86_400_000_000_000;
  // Computed inline to avoid non-static expression errors
  // TRIAL_NS = 15 * DAY_NS = 1_296_000_000_000_000
  // BILLING_CYCLE_NS = 30 * DAY_NS = 2_592_000_000_000_000

  // Apply 20% discount: price * 80 / 100
  public func applyDiscount(amountCents : Nat) : Nat {
    amountCents * 80 / 100;
  };

  public func planName(plan : Types.PlanType) : Text {
    switch (plan) {
      case (#starter) "Starter";
      case (#professional) "Professional";
      case (#enterprise) "Enterprise";
      case (#webDesign) "Web Design";
    };
  };

  public func planAmountCents(plan : Types.PlanType) : Nat {
    switch (plan) {
      case (#starter) STARTER_CENTS;
      case (#professional) PROFESSIONAL_CENTS;
      case (#enterprise) ENTERPRISE_CENTS;
      case (#webDesign) WEB_DESIGN_CENTS;
    };
  };

  public func isSubscriptionPlan(plan : Types.PlanType) : Bool {
    switch (plan) {
      case (#webDesign) false;
      case (_) true;
    };
  };

  // Build checkout session data (returned to frontend to initiate Stripe)
  public func buildCheckoutSession(
    _caller : Principal,
    req : Types.CheckoutRequest,
    now : Common.Timestamp,
    nextOrderId : Nat,
  ) : Types.CheckoutSessionData {
    let amount = planAmountCents(req.plan);
    let discounted = if (req.isInstantPayment) applyDiscount(amount) else amount;
    let orderId = "ORD-" # nextOrderId.toText() # "-" # now.toText();
    {
      sessionId = orderId; // used as a local session reference until Stripe confirms
      planName = planName(req.plan);
      planType = req.plan;
      amountCents = amount;
      discountedAmountCents = discounted;
      isInstantPayment = req.isInstantPayment;
      isSubscription = isSubscriptionPlan(req.plan);
      trialDays = if (isSubscriptionPlan(req.plan)) TRIAL_DAYS else 0;
      orderId;
    };
  };

  // Create a subscription record (starts in trial)
  public func newSubscription(
    caller : Principal,
    req : Types.CheckoutRequest,
    sessionData : Types.CheckoutSessionData,
    now : Common.Timestamp,
  ) : Types.SubscriptionRecord {
    let trialEnd = now + 1_296_000_000_000_000; // 15 days in ns
    let nextBilling = trialEnd + 2_592_000_000_000_000; // 30 days in ns
    {
      principal = caller;
      planName = sessionData.planName;
      planType = req.plan;
      amountCents = sessionData.amountCents;
      discountedAmountCents = sessionData.discountedAmountCents;
      isInstantPayment = req.isInstantPayment;
      status = if (isSubscriptionPlan(req.plan)) #trial else #active;
      trialStartDate = now;
      trialEndDate = trialEnd;
      nextBillingDate = nextBilling;
      createdAt = now;
      stripeSessionId = ?sessionData.sessionId;
    };
  };

  // Create a transaction log entry
  public func newTransaction(
    caller : Principal,
    req : Types.CheckoutRequest,
    sessionData : Types.CheckoutSessionData,
    now : Common.Timestamp,
  ) : Types.TransactionRecord {
    let effectiveAmount = if (req.isInstantPayment) sessionData.discountedAmountCents else sessionData.amountCents;
    {
      orderId = sessionData.orderId;
      principal = caller;
      planName = sessionData.planName;
      planType = req.plan;
      amountCents = effectiveAmount;
      paymentMethod = #stripe;
      status = #pending;
      stripeSessionId = ?sessionData.sessionId;
      timestamp = now;
    };
  };

  // Convert subscription to public view
  public func toSubscriptionView(sub : Types.SubscriptionRecord) : Types.SubscriptionView {
    {
      planName = sub.planName;
      planType = sub.planType;
      amountCents = sub.amountCents;
      discountedAmountCents = sub.discountedAmountCents;
      isInstantPayment = sub.isInstantPayment;
      status = sub.status;
      trialStartDate = sub.trialStartDate;
      trialEndDate = sub.trialEndDate;
      nextBillingDate = sub.nextBillingDate;
      createdAt = sub.createdAt;
      stripeSessionId = sub.stripeSessionId;
    };
  };

  // Convert transaction to public view
  public func toTransactionView(tx : Types.TransactionRecord) : Types.TransactionView {
    {
      orderId = tx.orderId;
      planName = tx.planName;
      planType = tx.planType;
      amountCents = tx.amountCents;
      paymentMethod = tx.paymentMethod;
      status = tx.status;
      stripeSessionId = tx.stripeSessionId;
      timestamp = tx.timestamp;
    };
  };

  // Confirm a payment: update subscription to active, transaction to success
  public func confirmPayment(
    subscriptions : Map.Map<Principal, Types.SubscriptionRecord>,
    transactions : List.List<Types.TransactionRecord>,
    caller : Principal,
    stripeSessionId : Text,
  ) {
    // Update subscription status to active
    switch (subscriptions.get(caller)) {
      case (?sub) {
        let updated : Types.SubscriptionRecord = { sub with status = #active; stripeSessionId = ?stripeSessionId };
        subscriptions.add(caller, updated);
      };
      case null {};
    };
    // Update matching transaction to success
    transactions.mapInPlace(func(tx) {
      if (tx.principal == caller and tx.status == #pending) {
        { tx with status = #success; stripeSessionId = ?stripeSessionId };
      } else tx;
    });
  };

  // Cancel a subscription
  public func cancelSubscription(
    subscriptions : Map.Map<Principal, Types.SubscriptionRecord>,
    caller : Principal,
  ) : Bool {
    switch (subscriptions.get(caller)) {
      case (?sub) {
        subscriptions.add(caller, { sub with status = #cancelled });
        true;
      };
      case null false;
    };
  };

  // Get all transactions for a principal (for admin or user view)
  public func getTransactionsForPrincipal(
    transactions : List.List<Types.TransactionRecord>,
    caller : Principal,
  ) : [Types.TransactionView] {
    let filtered = transactions.filter(func(tx) { tx.principal == caller });
    filtered.map<Types.TransactionRecord, Types.TransactionView>(func(tx) { toTransactionView(tx) }).toArray();
  };
};
