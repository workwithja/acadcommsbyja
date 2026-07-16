"use client";

import { ReactNode, useState } from "react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: "Are you available?",
    answer: (
      <>
        Please check my{" "}
        <a
          href="https://t.me/acadcommsby_ja/19"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 underline hover:text-blue-800"
        >
          Status
        </a>{" "}
        before inquiring.
      </>
    ),
  },
  {
    question: "How do I order?",
    answer: (
      <>
        Complete the{" "}
        <a
          href="https://t.me/acadcommsby_ja/10?comment=1385"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 underline hover:text-blue-800"
        >
          Order Form
        </a>{" "}
        and wait for your quotation.
      </>
    ),
  },
  {
    question: "Where can I see samples?",
    answer: (
      <>
        Please refer to the{" "}
        <a
          href="https://t.me/acadcommsby_ja/17"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 underline hover:text-blue-800"
        >
          Samples
        </a>
        .
      </>
    ),
  },
  {
    question: "Can you guarantee a specific grade?",
    answer:
      "While quality work is always prioritized, final grades depend on your instructor's evaluation and other academic factors.",
  },
  {
    question: "Do you offer revisions?",
    answer: (
      <>
        Yes. Kindly review the{" "}
        <a
          href="https://t.me/acadcommsby_ja/15?comment=1477"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 underline hover:text-blue-800"
        >
          Revision Policy
        </a>
        .
      </>
    ),
  },
  {
    question: "Where can I view feedbacks?",
    answer: (
      <>
        Please refer to the{" "}
        <a
          href="https://t.me/acadcommsby_ja/14"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 underline hover:text-blue-800"
        >
          Feedbacks
        </a>
        .
      </>
    ),
  },
  {
    question: "Can you accept tasks not listed in the pricelist?",
    answer: "Yes. Feel free to inquire.",
  },
  {
    question: "Can I pay a 50% down payment?",
    answer:
      "Yes. The remaining balance must be settled before file release.",
  },
  {
    question: "Do you accept rush tasks?",
    answer: "Yes, subject to availability and corresponding rush fees.",
  },
  {
    question: "What payment methods do you accept?",
    answer: (
      <>
        • GCash
        <br />
        • Load (additional ₱20 processing fee)
      </>
    ),
  },
  {
    question: "Can I cancel after payment?",
    answer: "Payments are generally non-refundable once work has started.",
  },
  {
    question: "Do you provide plagiarism reports?",
    answer:
      "Reports may be provided upon request, subject to availability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know before placing an order.
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25 12 15.75 4.5 8.25"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-blue-50 px-6 pb-5 pt-4">
                      <div className="whitespace-pre-line text-sm leading-relaxed text-slate-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}