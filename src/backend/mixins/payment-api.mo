import Time "mo:core/Time";
import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import PaymentTypes "../types/payment";
import PaymentLib "../lib/payment";

mixin (
  subscriptions : Map.Map<Principal, PaymentTypes.SubscriptionRecord>,
  transactions : List.List<PaymentTypes.TransactionRecord>,
) {
  /// Create a Stripe checkout session for a subscription or one-time purchase.
  /// Returns session data the frontend uses to redirect to Stripe Checkout.
  /// For subscriptions: includes 15-day trial. For instant payment: applies 20% discount.
  public shared ({ caller }) func createCheckoutSession(
    req : PaymentTypes.CheckoutRequest
  ) : async PaymentTypes.CheckoutSessionResult {
    let now = Time.now();
    let nextOrderId = transactions.size();
    let sessionData = PaymentLib.buildCheckoutSession(caller, req, now, nextOrderId);

    // Store pending subscription record
    let sub = PaymentLib.newSubscription(caller, req, sessionData, now);
    subscriptions.add(caller, sub);

    // Store pending transaction record
    let tx = PaymentLib.newTransaction(caller, req, sessionData, now);
    transactions.add(tx);

    #ok(sessionData);
  };

  /// Retrieve the current subscription record for the calling principal.
  public shared query ({ caller }) func getSubscription() : async PaymentTypes.GetSubscriptionResult {
    switch (subscriptions.get(caller)) {
      case (?sub) #ok(PaymentLib.toSubscriptionView(sub));
      case null #notFound;
    };
  };

  /// Confirm payment after Stripe webhook or frontend redirect callback.
  /// Updates subscription status to active and transaction to success.
  public shared ({ caller }) func confirmPayment(stripeSessionId : Text) : async Bool {
    PaymentLib.confirmPayment(subscriptions, transactions, caller, stripeSessionId);
    true;
  };

  /// Cancel the calling principal's subscription.
  public shared ({ caller }) func cancelSubscription() : async Bool {
    PaymentLib.cancelSubscription(subscriptions, caller);
  };

  /// Get all transaction records for the calling principal.
  public shared query ({ caller }) func getMyTransactions() : async [PaymentTypes.TransactionView] {
    PaymentLib.getTransactionsForPrincipal(transactions, caller);
  };

  /// Admin: get all transactions (admin-only, caller must be a controller).
  public shared ({ caller }) func getAllTransactions() : async [PaymentTypes.TransactionView] {
    if (not caller.isController()) {
      return [];
    };
    transactions.map<PaymentTypes.TransactionRecord, PaymentTypes.TransactionView>(
      func(tx) { PaymentLib.toTransactionView(tx) }
    ).toArray();
  };
};
