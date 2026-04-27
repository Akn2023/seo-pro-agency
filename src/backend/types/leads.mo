import Common "common";

module {
  public type Lead = {
    id : Common.LeadId;
    fullName : Text;
    email : Text;
    company : Text;
    phone : Text;
    message : Text;
    submittedAt : Common.Timestamp;
  };

  public type LeadInput = {
    fullName : Text;
    email : Text;
    company : Text;
    phone : Text;
    message : Text;
  };

  public type SubmitLeadResult = {
    #ok : Common.LeadId;
    #err : Text;
  };
};
