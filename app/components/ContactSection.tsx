"use client";

import { useState } from "react";
import Bg from "@/public/ContactBg.png";
import Image from "next/image";
import Icon1 from "@/public/ContactIcon1.png";
import Icon2 from "@/public/ContactIcon2.png";
import Icon3 from "@/public/ContactIcon3.png";
import ContactButton from "../ui/ContactButton";

const BUDGET_OPTIONS = [
  "< $5,000",
  "$5,000 - $10,000",
  "Can't reveal yet",
] as const;
type BudgetOption = (typeof BUDGET_OPTIONS)[number];

interface FormData {
  name: string;
  email: string;
  company: string;
  budget: BudgetOption;
  message: string;
  source: string;
}

interface ContactSectionProps {
  close?: () => void;
}

const CONTACT_ICONS = [{ icon: Icon1 }, { icon: Icon2 }, { icon: Icon3 }];

function ContactTitleBlock() {
  return (
    <div>
      <h2 className="font-display text-mara-charcoal text-2xl leading-tight tracking-tight md:text-[32px]">
        What problems
        <br />
        we solving
      </h2>
      <p className="mt-4 text-sm max-w-[422px] text-mara-charcoal/70">
        At our core, we believe in delivering high-quality designs in days, not
        weeks. This ensures that your project stays on track and progresses
        smoothly, minimizing delays and maximizing efficiency.
      </p>
    </div>
  );
}

function ContactLeftPanel() {
  return (
    <div className="relative overflow-hidden md:w-[750px] px-4 py-5 md:px-6 max-md:pb-0 md:py-12 text-white lg:px-12 md:border-r md:border-mara-charcoal">
      <Image
        src={Bg}
        width={Bg.width}
        height={Bg.height}
        sizes="(min-width: 768px) 750px, 0px"
        className="absolute bottom-0 right-0 w-full max-w-full h-auto max-md:hidden pointer-events-none select-none"
        alt=""
      />

      <div className="relative z-[1] flex h-full flex-col justify-center gap-10">
        <ContactTitleBlock />

        <div className="flex gap-3 max-md:hidden">
          {CONTACT_ICONS.map((card, i) => (
            <div key={i} className="relative h-8 w-8 shrink-0">
              <Image
                src={card.icon}
                alt=""
                width={32}
                height={32}
                sizes="32px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type ContactFieldProps = {
  as: "input" | "textarea";
  type?: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  error?: string;
  wrapperClassName?: string;
  fieldClassName: string;
};

function ContactField({
  as,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
  wrapperClassName = "",
  fieldClassName,
}: ContactFieldProps) {
  return (
    <div className={wrapperClassName}>
      {as === "input" ? (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={fieldClassName}
        />
      ) : (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={fieldClassName}
        />
      )}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

function ContactBudgetOptions({
  budget,
  onSelect,
}: {
  budget: BudgetOption;
  onSelect: (next: BudgetOption) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {BUDGET_OPTIONS.map((option) => {
        const active = budget === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`border px-4 py-2 text-mara-charcoal text-xs transition ${
              active
                ? "border-mara-charcoal bg-mara-soft font-medium"
                : "border-mara-charcoal/50 hover:border-mara-zinc-900 font-normal hover:text-mara-zinc-900"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function ContactSourceSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}) {
  return (
    <div className="space-y-2">
      <select
        name="source"
        value={value}
        onChange={onChange}
        className="w-full border-0 border-b border-mara-charcoal/50 bg-transparent pb-3 text-sm text-mara-charcoal outline-none ring-0"
      >
        <option value="">How did you hear about us?</option>
        <option>Dribbble</option>
        <option>Behance</option>
        <option>Upwork</option>
        <option>Google</option>
        <option>Referral</option>
        <option>AI</option>
        <option>Other</option>
      </select>
    </div>
  );
}

function ContactSubmitArea({
  isSubmitting,
  onSubmit,
}: {
  isSubmitting: boolean;
  onSubmit: () => void;
}) {
  return (
    <ContactButton
      onClick={onSubmit}
      disabled={isSubmitting}
      label={isSubmitting ? "Sending..." : "Submit"}
      hoverLabel={isSubmitting ? "Sending..." : "Submit"}
      variant="light"
    />
  );
}

function ContactForm({
  budget,
  setBudget,
  formData,
  errors,
  isSubmitting,
  onChange,
  onSubmit,
}: {
  budget: BudgetOption;
  setBudget: (next: BudgetOption) => void;
  formData: Omit<FormData, "budget">;
  errors: Partial<Record<keyof FormData, string>>;
  isSubmitting: boolean;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="space-y-7 w-full px-4 py-5 md:px-6 md:py-8 lg:py-14 lg:px-16 max-md:pt-0">
      <div className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <ContactField
            as="input"
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="Name*"
            error={errors.name}
            wrapperClassName="space-y-2"
            fieldClassName="w-full border-0 border-b border-mara-charcoal/50 bg-transparent pb-3 text-sm text-mara-zinc-900 outline-none ring-0 placeholder:text-mara-charcoal/20"
          />

          <ContactField
            as="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Email*"
            error={errors.email}
            wrapperClassName="space-y-1.5"
            fieldClassName="w-full border-0 border-b border-mara-charcoal/50 bg-transparent pb-3 text-sm text-mara-zinc-900 outline-none ring-0 placeholder:text-mara-charcoal/20"
          />
        </div>

        <ContactField
          as="input"
          type="text"
          name="company"
          value={formData.company}
          onChange={onChange}
          placeholder="Company"
          wrapperClassName="space-y-2"
          fieldClassName="w-full border-0 border-b border-mara-charcoal/50 bg-transparent pb-3 text-sm text-mara-zinc-900 outline-none ring-0 placeholder:text-mara-charcoal/20"
        />
      </div>

      <div className="space-y-5">
        <div className="flex flex-col gap-3">
          <label className="text-sm leading-none font-normal text-mara-charcoal">
            Budget range*
          </label>
          <ContactBudgetOptions budget={budget} onSelect={setBudget} />
        </div>

        <ContactField
          as="textarea"
          name="message"
          value={formData.message}
          onChange={onChange}
          placeholder="Tell us about your project"
          wrapperClassName="space-y-2"
          fieldClassName="h-24 w-full resize-none border max-md:h-20 border-mara-charcoal/50 bg-transparent p-3 text-sm text-mara-zinc-900 outline-none ring-0 placeholder:text-mara-charcoal/20 focus:border-mara-zinc-900"
        />
      </div>

      <ContactSourceSelect value={formData.source} onChange={onChange} />

      <ContactSubmitArea isSubmitting={isSubmitting} onSubmit={onSubmit} />
    </div>
  );
}

function ContactSectionContent({
  isOverlay,
  close,
  budget,
  setBudget,
  formData,
  errors,
  isSubmitting,
  onChange,
  onSubmit,
}: {
  isOverlay: boolean;
  close?: () => void;
  budget: BudgetOption;
  setBudget: (next: BudgetOption) => void;
  formData: Omit<FormData, "budget">;
  errors: Partial<Record<keyof FormData, string>>;
  isSubmitting: boolean;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  onSubmit: () => void;
}) {
  return (
    <section
      className={`flex max-md:flex-col bg-mara-page md:bg-mara-white max-md:gap-8 ${
        isOverlay ? "border border-mara-charcoal shadow-lg" : ""
      }`}
    >
      {isOverlay && (
        <button
          onClick={close}
          className="absolute cursor-pointer top-4 right-4 z-10 text-mara-charcoal text-base leading-none"
          aria-label="Close"
        >
          ✕
        </button>
      )}

      <ContactLeftPanel />

      <ContactForm
        budget={budget}
        setBudget={setBudget}
        formData={formData}
        errors={errors}
        isSubmitting={isSubmitting}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </section>
  );
}

export function ContactSection({ close }: ContactSectionProps) {
  const [budget, setBudget] = useState<BudgetOption>("< $5,000");
  const [formData, setFormData] = useState<Omit<FormData, "budget">>({
    name: "",
    email: "",
    company: "",
    message: "",
    source: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    const payload: FormData = {
      ...formData,
      budget,
    };

    setIsSubmitting(true);

    await new Promise((res) => setTimeout(res, 800));

    console.log("📬 Contact form submitted:", payload);

    setIsSubmitting(false);
  };

  const isOverlay = !!close;

  const content = (
    <ContactSectionContent
      isOverlay={isOverlay}
      close={close}
      budget={budget}
      setBudget={setBudget}
      formData={formData}
      errors={errors}
      isSubmitting={isSubmitting}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );

  if (isOverlay) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(5px)",
          backgroundColor:
            "color-mix(in srgb, var(--color-mara-white) 10%, transparent)",
        }}
        onClick={(e) => e.target === e.currentTarget && close?.()}
      >
        <div
          className="relative w-full max-w-[90%] mx-4 max-h-[90vh] overflow-y-auto "
          style={{
            border:
              "1px solid color-mix(in srgb, var(--color-mara-white) 50%, transparent)",
            boxShadow: [
              "0 8px 32px color-mix(in srgb, var(--color-mara-ink) 10%, transparent)",
              "inset 0 1px 1px color-mix(in srgb, var(--color-mara-white) 60%, transparent)",
              "inset 0 -1px 1px color-mix(in srgb, var(--color-mara-white) 20%, transparent)",
            ].join(", "),
          }}
        >
          {/* Optional: subtle light reflection overlay */}
          <div className="absolute inset-0  pointer-events-none" />
          <div className="relative z-10">{content}</div>
        </div>
      </div>
    );
  }

  return content;
}
