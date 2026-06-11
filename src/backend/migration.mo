// Migration from v1 (had nextLeadId) to v2 (nextLeadId removed, payment state added)
// nextLeadId is intentionally dropped — lead IDs are now derived from list size.
module {
  type OldActor = {
    var nextLeadId : Nat;
  };

  type NewActor = {};

  public func run(_old : OldActor) : NewActor {
    {};
  };
};
