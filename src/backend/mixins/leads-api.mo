import List "mo:core/List";
import LeadTypes "../types/leads";
import LeadsLib "../lib/leads";

mixin (leads : List.List<LeadTypes.Lead>) {
  public shared func submitLead(input : LeadTypes.LeadInput) : async LeadTypes.SubmitLeadResult {
    LeadsLib.submitLead(leads, input);
  };

  public shared query func getLeads() : async [LeadTypes.Lead] {
    LeadsLib.getAllLeads(leads);
  };
};
