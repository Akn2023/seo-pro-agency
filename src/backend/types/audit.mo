module {
  public type AuditReport = {
    url : Text;
    overallScore : Nat;
    onPageScore : Nat;
    technicalScore : Nat;
    pageSpeedScore : Nat;
    mobileFriendlinessScore : Nat;
    metaTagsScore : Nat;
    backlinkScore : Nat;
    recommendations : [Text];
  };

  public type AuditResult = {
    #ok : AuditReport;
    #err : Text;
  };
};
