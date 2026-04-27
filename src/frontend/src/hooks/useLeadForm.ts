import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { createActor } from "../backend";
import type { FormStatus, LeadFormData } from "../types";

const INITIAL_FORM: LeadFormData = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

export function useLeadForm() {
  const { actor } = useActor(createActor);
  const [formData, setFormData] = useState<LeadFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const mutation = useMutation({
    mutationFn: async (data: LeadFormData) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitLead(data);
    },
    onMutate: () => {
      setStatus("submitting");
      setError(null);
    },
    onSuccess: (result) => {
      if (result.__kind__ === "ok") {
        setStatus("success");
        setFormData(INITIAL_FORM);
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

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const reset = () => {
    setFormData(INITIAL_FORM);
    setStatus("idle");
    setError(null);
  };

  return { formData, updateField, status, error, submitForm, reset };
}
