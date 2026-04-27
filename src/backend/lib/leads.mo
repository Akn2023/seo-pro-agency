import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/leads";
import Common "../types/common";

module {
  public func submitLead(
    leads : List.List<Types.Lead>,
    nextId : Nat,
    input : Types.LeadInput,
  ) : (Types.SubmitLeadResult, Nat) {
    Debug.todo();
  };

  public func getAllLeads(leads : List.List<Types.Lead>) : [Types.Lead] {
    Debug.todo();
  };
};
