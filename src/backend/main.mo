import List "mo:core/List";
import LeadTypes "types/leads";
import LeadsApi "mixins/leads-api";
import AuditApi "mixins/audit-api";

actor {
  let leads = List.empty<LeadTypes.Lead>();
  var nextLeadId : Nat = 0;

  include LeadsApi(leads, nextLeadId);
  include AuditApi();
};
