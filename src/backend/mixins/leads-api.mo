import Debug "mo:core/Debug";
import List "mo:core/List";
import LeadTypes "../types/leads";
import Common "../types/common";

mixin (leads : List.List<LeadTypes.Lead>, nextLeadId : Nat) {
  public func submitLead(input : LeadTypes.LeadInput) : async LeadTypes.SubmitLeadResult {
    Debug.todo();
  };

  public func getLeads() : async [LeadTypes.Lead] {
    Debug.todo();
  };
};
