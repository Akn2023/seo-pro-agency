import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import LeadTypes "types/leads";
import PaymentTypes "types/payment";
import LeadsApi "mixins/leads-api";
import AuditApi "mixins/audit-api";
import PaymentApi "mixins/payment-api";
import Migration "migration";

(with migration = Migration.run)
actor {
  let leads = List.empty<LeadTypes.Lead>();

  let subscriptions = Map.empty<Principal, PaymentTypes.SubscriptionRecord>();
  let transactions = List.empty<PaymentTypes.TransactionRecord>();

  include LeadsApi(leads);
  include AuditApi();
  include PaymentApi(subscriptions, transactions);
};
