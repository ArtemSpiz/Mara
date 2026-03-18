"use client";

import { useState } from "react";
import Bg from "@/public/ContactBg.png";
import Image from "next/image";
import Icon1 from "@/public/ContactIcon1.png";
import Icon2 from "@/public/ContactIcon2.png";
import Icon3 from "@/public/ContactIcon3.png";
import ArrowBtn from "@/public/ArrowBtn.png";

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
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const ContactIcons = [{ icon: Icon1 }, { icon: Icon2 }, { icon: Icon3 }];

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
    setSubmitted(true);
  };

  const isOverlay = !!close;

  const content = (
    <section
      className={`flex max-md:flex-col bg-[#EEEEE6] md:bg-white max-md:gap-8 ${isOverlay ? "border border-[#252525] shadow-lg" : ""}`}
    >
      {isOverlay && (
        <button
          onClick={close}
          className="absolute cursor-pointer top-4 right-4 z-10 text-[#252525] text-base leading-none"
          aria-label="Close"
        >
          ✕
        </button>
      )}

      <div className="relative overflow-hidden md:w-[750px] px-4 py-5 md:px-6 max-md:pb-0 md:py-12 text-white lg:px-12 md:border-r md:border-[#252525]">
        <Image
          src={Bg}
          className="absolute bottom-0 right-0 w-full h-auto max-md:hidden"
          alt=""
        />
        <div className="flex h-full flex-col justify-center gap-10">
          <div>
            <h2 className="font-display text-[#252525] text-2xl leading-tight tracking-tight md:text-[32px]">
              What problems
              <br />
              we solving
            </h2>
            <p className="mt-4 text-sm max-w-[422px] text-[#252525B2]">
              At our core, we believe in delivering high-quality designs in
              days, not weeks. This ensures that your project stays on track and
              progresses smoothly, minimizing delays and maximizing efficiency.
            </p>
          </div>
          <div className="flex gap-3 max-md:hidden">
            {ContactIcons.map((card, i) => (
              <div key={i} className="w-8 h-8">
                <Image src={card.icon} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-5 w-full px-4 py-5 md:px-6 md:py-8 lg:py-12 lg:px-12 max-md:pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              className="w-full border-0 border-b border-[#25252580] bg-transparent pb-2 text-sm text-zinc-900 outline-none ring-0 placeholder:text-[#25252533]"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name}</p>
            )}
          </div>
          <div className="space-y-1.5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className="w-full border-0 border-b border-[#25252580] bg-transparent pb-2 text-sm text-zinc-900 outline-none ring-0 placeholder:text-[#25252533]"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full border-0 border-b border-[#25252580] bg-transparent pb-2 text-sm text-zinc-900 outline-none ring-0 placeholder:text-[#25252533]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-normal text-[#252525]">
            Budget range*
          </label>
          <div className="flex flex-wrap gap-2 pt-3">
            {BUDGET_OPTIONS.map((option) => {
              const active = budget === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBudget(option)}
                  className={`border  px-4 py-2 text-[#252525] text-xs transition ${
                    active
                      ? "border-[#252525] bg-[#EBEBEB] font-medium"
                      : "border-[#25252580] hover:border-zinc-900 font-normal hover:text-zinc-900"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-1.5">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project"
            className="h-24 w-full resize-none border max-md:h-20 border-[#25252580] bg-transparent p-3 text-sm text-zinc-900 outline-none ring-0 placeholder:text-[#25252533] focus:border-zinc-900"
          />
        </div>

        <div className="space-y-1.5">
          <select
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="w-full border-0 border-b border-[#25252580] bg-transparent pb-3 text-sm text-[#252525] outline-none ring-0"
          >
            <option value="">How did you hear about us?</option>
            <option>Dribbble</option>
            <option>Behance</option>
            <option>Upwork</option>
            <option>Google</option>
            <option>Referral</option>
            <option>Other</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="mt-2 max-md:-mt-2 inline-flex cursor-pointer items-center gap-2 bg-transparent border border-[#25252580] px-6 py-2.5 text-sm text-[#252525] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Submit"}
          <Image src={ArrowBtn} alt="" width={22} height={7} />
        </button>
      </div>
    </section>
  );

  if (isOverlay) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
        onClick={(e) => e.target === e.currentTarget && close?.()}
      >
        <div
          className="relative w-full max-w-[90%] mx-4 max-h-[90vh] overflow-y-auto "
          style={{
            border: "1px solid rgba(255, 255, 255, 0.5)",
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.1),
              inset 0 1px 1px rgba(255, 255, 255, 0.6),
              inset 0 -1px 1px rgba(255, 255, 255, 0.2)
            `,
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
