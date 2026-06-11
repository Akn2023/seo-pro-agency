import AuditTypes "../types/audit";
import AuditLib "../lib/audit";

mixin () {
  public shared func runSeoAudit(url : Text) : async AuditTypes.AuditResult {
    AuditLib.runAudit(url);
  };
};
