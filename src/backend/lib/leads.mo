import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/leads";
import Common "../types/common";

module {
  public func submitLead(
    leads : List.List<Types.Lead>,
    input : Types.LeadInput,
  ) : Types.SubmitLeadResult {
    let nextId = leads.size();
    let lead : Types.Lead = {
      id = nextId;
      fullName = input.fullName;
      email = input.email;
      company = input.company;
      phone = input.phone;
      message = input.message;
      submittedAt = Time.now();
    };
    leads.add(lead);
    #ok(nextId);
  };

  public func getAllLeads(leads : List.List<Types.Lead>) : [Types.Lead] {
    leads.toArray();
  };
};
