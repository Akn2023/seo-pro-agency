import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  getLeads: async () => [
    {
      id: BigInt(1),
      fullName: "Jane Smith",
      email: "jane@innovatesolutions.com",
      company: "Innovate Solutions",
      phone: "+1 555-0101",
      message: "Interested in SEO audit services.",
      submittedAt: BigInt(Date.now() * 1_000_000),
    },
    {
      id: BigInt(2),
      fullName: "Carlos Mendez",
      email: "carlos@growthlabs.io",
      company: "Growth Labs",
      phone: "+1 555-0202",
      message: "Looking for a full digital marketing strategy.",
      submittedAt: BigInt(Date.now() * 1_000_000),
    },
  ],
  runSeoAudit: async (_url: string) => ({
    __kind__: "ok" as const,
    ok: {
      url: _url || "https://example.com",
      overallScore: BigInt(82),
      onPageScore: BigInt(78),
      pageSpeedScore: BigInt(71),
      metaTagsScore: BigInt(90),
      technicalScore: BigInt(85),
      mobileFriendlinessScore: BigInt(88),
      backlinkScore: BigInt(65),
      recommendations: [
        "Add missing alt attributes to images for better accessibility and SEO.",
        "Improve page load speed by compressing large images.",
        "Add a canonical tag to avoid duplicate content issues.",
        "Increase internal linking to boost page authority.",
        "Optimize meta descriptions for target keywords.",
      ],
    },
  }),
  submitLead: async (_input) => ({
    __kind__: "ok" as const,
    ok: BigInt(3),
  }),
};
