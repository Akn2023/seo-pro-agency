import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  Lock,
  Shield,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type PlanKey = "starter" | "professional" | "enterprise" | "webdesign";

interface Plan {
  key: PlanKey;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  period: string;
  isOneTime: boolean;
  features: string[];
  badge?: string;
}

const PLANS: Plan[] = [
  {
    key: "starter",
    name: "Starter",
    originalPrice: 99,
    discountedPrice: 79,
    period: "/mo",
    isOneTime: false,
    features: [
      "5 Keywords tracked",
      "10 Link building/mo",
      "Basic reports",
      "Email support",
    ],
  },
  {
    key: "professional",
    name: "Professional",
    originalPrice: 199,
    discountedPrice: 159,
    period: "/mo",
    isOneTime: false,
    badge: "Most Popular",
    features: [
      "50 Keywords tracked",
      "Unlimited link building",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    key: "enterprise",
    name: "Enterprise",
    originalPrice: 299,
    discountedPrice: 239,
    period: "/mo",
    isOneTime: false,
    features: [
      "Unlimited keywords",
      "White-label reports",
      "Dedicated manager",
      "24/7 support",
    ],
  },
  {
    key: "webdesign",
    name: "SEO Web Design",
    originalPrice: 499,
    discountedPrice: 499,
    period: " one-time",
    isOneTime: true,
    features: [
      "Fully SEO-optimized site",
      "Mobile responsive",
      "Core Web Vitals optimized",
      "1-year support",
    ],
  },
];

function PlanCard({
  plan,
  selected,
  onSelect,
}: {
  plan: Plan;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      data-ocid={`checkout.plan_${plan.key}`}
      onClick={onSelect}
      className={`w-full text-left rounded-xl border-2 p-4 transition-smooth cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        selected
          ? "border-primary bg-primary/5"
          : "border-border bg-card hover:border-primary/40"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`mt-0.5 h-4 w-4 rounded-full border-2 flex-shrink-0 transition-smooth ${
              selected ? "border-primary bg-primary" : "border-muted-foreground"
            }`}
          >
            {selected && (
              <div className="h-full w-full rounded-full bg-primary-foreground scale-50" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-foreground font-display">
                {plan.name}
              </span>
              {plan.badge && (
                <Badge className="text-xs py-0 btn-gradient border-0">
                  {plan.badge}
                </Badge>
              )}
              {!plan.isOneTime && (
                <Badge variant="secondary" className="text-xs py-0">
                  15-day free trial
                </Badge>
              )}
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              {!plan.isOneTime && (
                <span className="text-sm text-muted-foreground line-through">
                  ${plan.originalPrice}
                  {plan.period}
                </span>
              )}
              <span className="text-lg font-bold text-primary">
                ${plan.discountedPrice}
                <span className="text-sm font-normal text-muted-foreground">
                  {plan.period}
                </span>
              </span>
              {!plan.isOneTime && (
                <Badge
                  variant="outline"
                  className="text-xs text-primary border-primary/30 py-0"
                >
                  20% off
                </Badge>
              )}
            </div>
            {!plan.isOneTime && (
              <p className="text-xs text-muted-foreground mt-0.5">
                7-day setup period included
              </p>
            )}
          </div>
        </div>
      </div>
      {selected && (
        <ul className="mt-3 pl-7 space-y-1">
          {plan.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-accent flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}
    </button>
  );
}

export default function Checkout() {
  const search = useSearch({ strict: false }) as { plan?: string };
  const navigate = useNavigate();

  const initialPlan = (PLANS.find((p) => p.key === search.plan) ?? PLANS[1])
    .key;
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>(
    initialPlan as PlanKey,
  );
  const [form, setForm] = useState({
    email: "",
    name: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    address: "",
    city: "",
    country: "US",
    zip: "",
  });

  const plan = PLANS.find((p) => p.key === selectedPlan)!;

  useEffect(() => {
    if (search.plan) {
      const found = PLANS.find((p) => p.key === search.plan);
      if (found) setSelectedPlan(found.key);
    }
  }, [search.plan]);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    let formatted = value;
    if (name === "cardNumber") {
      formatted = value
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }
    if (name === "expiry") {
      formatted = value
        .replace(/\D/g, "")
        .slice(0, 4)
        .replace(/^(\d{2})(\d)/, "$1/$2");
    }
    if (name === "cvc") {
      formatted = value.replace(/\D/g, "").slice(0, 4);
    }
    setForm((prev) => ({ ...prev, [name]: formatted }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/checkout/success", search: { plan: selectedPlan } });
  };

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back link */}
        <a
          href="/#pricing"
          data-ocid="checkout.back_link"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Plans
        </a>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
            {/* LEFT: Plan selector + payment form */}
            <div className="space-y-6">
              {/* Plan selector */}
              <Card className="card-elevated">
                <CardHeader className="pb-3">
                  <CardTitle className="font-display text-lg flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Choose Your Plan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {PLANS.map((p) => (
                    <PlanCard
                      key={p.key}
                      plan={p}
                      selected={selectedPlan === p.key}
                      onSelect={() => setSelectedPlan(p.key)}
                    />
                  ))}
                </CardContent>
              </Card>

              {/* Payment form */}
              <Card className="card-elevated">
                <CardHeader className="pb-3">
                  <CardTitle className="font-display text-lg flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Payment Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Contact info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleInput}
                          data-ocid="checkout.email_input"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="name">Full name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleInput}
                          data-ocid="checkout.name_input"
                        />
                      </div>
                    </div>

                    <Separator />

                    {/* Stripe card fields */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Lock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          Card Information
                        </span>
                        <Badge
                          variant="outline"
                          className="text-xs ml-auto border-primary/30 text-primary py-0"
                        >
                          Secured by Stripe
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="space-y-1.5">
                          <Label htmlFor="cardNumber">Card number</Label>
                          <div className="relative">
                            <Input
                              id="cardNumber"
                              name="cardNumber"
                              type="text"
                              required
                              placeholder="1234 5678 9012 3456"
                              value={form.cardNumber}
                              onChange={handleInput}
                              className="pr-12"
                              data-ocid="checkout.card_number_input"
                            />
                            <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1.5">
                            <Label htmlFor="expiry">Expiry date</Label>
                            <Input
                              id="expiry"
                              name="expiry"
                              type="text"
                              required
                              placeholder="MM/YY"
                              value={form.expiry}
                              onChange={handleInput}
                              data-ocid="checkout.expiry_input"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input
                              id="cvc"
                              name="cvc"
                              type="text"
                              required
                              placeholder="123"
                              value={form.cvc}
                              onChange={handleInput}
                              data-ocid="checkout.cvc_input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Billing address */}
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-foreground">
                        Billing Address
                      </p>
                      <div className="space-y-1.5">
                        <Label htmlFor="address">Street address</Label>
                        <Input
                          id="address"
                          name="address"
                          type="text"
                          required
                          placeholder="123 Main Street"
                          value={form.address}
                          onChange={handleInput}
                          data-ocid="checkout.address_input"
                        />
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="space-y-1.5 sm:col-span-1">
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            name="city"
                            type="text"
                            required
                            placeholder="New York"
                            value={form.city}
                            onChange={handleInput}
                            data-ocid="checkout.city_input"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="zip">ZIP / Postal</Label>
                          <Input
                            id="zip"
                            name="zip"
                            type="text"
                            required
                            placeholder="10001"
                            value={form.zip}
                            onChange={handleInput}
                            data-ocid="checkout.zip_input"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="country">Country</Label>
                          <select
                            id="country"
                            name="country"
                            value={form.country}
                            onChange={handleInput}
                            data-ocid="checkout.country_select"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground"
                          >
                            <option value="US">United States</option>
                            <option value="GB">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="IN">India</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="SG">Singapore</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Stripe CTA */}
                    <Button
                      type="submit"
                      data-ocid="checkout.submit_button"
                      className="w-full btn-gradient text-base font-semibold h-12 rounded-xl"
                    >
                      <Lock className="h-4 w-4 mr-2" />
                      {plan.isOneTime
                        ? "Complete Purchase"
                        : "Start Free Trial"}
                      {!plan.isOneTime && " — 15 Days Free"}
                    </Button>

                    {/* PayPal placeholder */}
                    <div className="relative group">
                      <button
                        type="button"
                        disabled
                        data-ocid="checkout.paypal_button"
                        className="w-full h-11 rounded-xl bg-[#ffc439] opacity-50 cursor-not-allowed flex items-center justify-center gap-2 font-bold text-[#003087] text-sm select-none"
                        aria-label="PayPal – coming soon"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-label="PayPal"
                          role="img"
                          className="h-5 w-5 fill-[#009cde]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.26-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.477z" />
                        </svg>
                        Pay with PayPal
                      </button>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        PayPal coming soon
                      </div>
                    </div>

                    {/* Security badges */}
                    <div className="flex items-center justify-center gap-4 pt-1 flex-wrap">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Lock className="h-3.5 w-3.5 text-primary" />
                        Secured by Stripe
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Shield className="h-3.5 w-3.5 text-primary" />
                        SSL Encrypted
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Lock className="h-3.5 w-3.5 text-primary" />
                        256-bit encryption
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT: Order summary */}
            <div className="lg:sticky lg:top-24 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Card className="card-elevated border-primary/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-display text-base">
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg bg-muted/40 p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-foreground">
                          {plan.name}
                        </span>
                        {plan.badge && (
                          <Badge className="text-xs btn-gradient border-0">
                            {plan.badge}
                          </Badge>
                        )}
                      </div>
                      {!plan.isOneTime && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground line-through">
                            ${plan.originalPrice}/mo
                          </span>
                          <span className="text-sm font-bold text-primary">
                            ${plan.discountedPrice}/mo
                          </span>
                          <Badge
                            variant="outline"
                            className="text-xs text-primary border-primary/30 py-0 ml-auto"
                          >
                            20% off
                          </Badge>
                        </div>
                      )}
                      {plan.isOneTime && (
                        <span className="text-sm font-bold text-primary">
                          ${plan.discountedPrice} one-time
                        </span>
                      )}
                    </div>

                    {!plan.isOneTime && (
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-muted-foreground">
                          <span>Free trial</span>
                          <span className="text-accent font-medium">
                            15 days
                          </span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Setup period</span>
                          <span>7 days</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Due today</span>
                          <span className="text-foreground font-semibold">
                            $0.00
                          </span>
                        </div>
                      </div>
                    )}

                    <Separator />

                    <div className="flex justify-between text-sm font-semibold">
                      <span>{plan.isOneTime ? "Total" : "After trial"}</span>
                      <span className="text-primary">
                        ${plan.discountedPrice}
                        {plan.isOneTime ? "" : "/mo"}
                      </span>
                    </div>

                    {!plan.isOneTime && (
                      <p className="text-xs text-muted-foreground text-center">
                        Billed monthly. Cancel anytime before trial ends.
                      </p>
                    )}

                    <div className="space-y-2">
                      {plan.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <p className="text-xs text-muted-foreground text-center mt-3">
                  Questions?{" "}
                  <a href="/about" className="text-primary hover:underline">
                    Contact our team
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
