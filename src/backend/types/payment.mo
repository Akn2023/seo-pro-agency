import Common "common";

module {
  // Payment plan variants
  public type PlanType = {
    #starter;      // $99/mo
    #professional; // $199/mo
    #enterprise;   // $299/mo
    #webDesign;    // $499 one-time
  };

  public type PaymentMethod = {
    #stripe;
  };

  public type SubscriptionStatus = {
    #trial;
    #active;
    #cancelled;
    #pastDue;
  };

  public type TransactionStatus = {
    #pending;
    #success;
    #failed;
  };

  public type CheckoutSessionStatus = {
    #pending;
    #completed;
    #expired;
  };

  // Stored subscription record (mutable fields for status updates)
  public type SubscriptionRecord = {
    principal : Principal;
    planName : Text;
    planType : PlanType;
    amountCents : Nat;           // original price in cents
    discountedAmountCents : Nat; // 20% discount price in cents (instant payment)
    isInstantPayment : Bool;
    status : SubscriptionStatus;
    trialStartDate : Common.Timestamp;
    trialEndDate : Common.Timestamp;
    nextBillingDate : Common.Timestamp;
    createdAt : Common.Timestamp;
    stripeSessionId : ?Text;
  };

  // Public view — no var fields, safe to return over API
  public type SubscriptionView = {
    planName : Text;
    planType : PlanType;
    amountCents : Nat;
    discountedAmountCents : Nat;
    isInstantPayment : Bool;
    status : SubscriptionStatus;
    trialStartDate : Common.Timestamp;
    trialEndDate : Common.Timestamp;
    nextBillingDate : Common.Timestamp;
    createdAt : Common.Timestamp;
    stripeSessionId : ?Text;
  };

  // Transaction log entry
  public type TransactionRecord = {
    orderId : Text;
    principal : Principal;
    planName : Text;
    planType : PlanType;
    amountCents : Nat;
    paymentMethod : PaymentMethod;
    status : TransactionStatus;
    stripeSessionId : ?Text;
    timestamp : Common.Timestamp;
  };

  public type TransactionView = {
    orderId : Text;
    planName : Text;
    planType : PlanType;
    amountCents : Nat;
    paymentMethod : PaymentMethod;
    status : TransactionStatus;
    stripeSessionId : ?Text;
    timestamp : Common.Timestamp;
  };

  // Checkout session request
  public type CheckoutRequest = {
    plan : PlanType;
    isInstantPayment : Bool;
  };

  // Checkout session response
  public type CheckoutSessionResult = {
    #ok : CheckoutSessionData;
    #err : Text;
  };

  public type CheckoutSessionData = {
    sessionId : Text;
    planName : Text;
    planType : PlanType;
    amountCents : Nat;
    discountedAmountCents : Nat;
    isInstantPayment : Bool;
    isSubscription : Bool;
    trialDays : Nat;
    orderId : Text;
  };

  public type GetSubscriptionResult = {
    #ok : SubscriptionView;
    #notFound;
  };
};
