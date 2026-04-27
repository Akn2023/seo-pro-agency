import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { createActor } from "../backend";
import type { AuditReport, AuditStatus } from "../types";

export function useAuditTool() {
  const { actor } = useActor(createActor);
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<AuditStatus>("idle");
  const [report, setReport] = useState<AuditReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: async (auditUrl: string) => {
      if (!actor) throw new Error("Backend not available");
      return actor.runSeoAudit(auditUrl);
    },
    onMutate: () => {
      setStatus("loading");
      setError(null);
      setReport(null);
    },
    onSuccess: (result) => {
      if (result.__kind__ === "ok") {
        setReport(result.ok as AuditReport);
        setStatus("success");
      } else {
        setError(result.err);
        setStatus("error");
      }
    },
    onError: (err: Error) => {
      setError(err.message);
      setStatus("error");
    },
  });

  const runAudit = () => {
    if (!url.trim()) return;
    const normalized = url.startsWith("http") ? url : `https://${url}`;
    mutation.mutate(normalized);
  };

  const reset = () => {
    setUrl("");
    setStatus("idle");
    setReport(null);
    setError(null);
  };

  return { url, setUrl, status, report, error, runAudit, reset };
}
