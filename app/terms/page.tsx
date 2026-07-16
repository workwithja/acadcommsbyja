import Link from "next/link";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "These Terms & Conditions are designed to ensure a smooth, transparent, and professional transaction between Academic Commission by JA and every client. By placing an order or sending payment, you acknowledge that you have read, understood, and agreed to the policies stated below.",
  },

  {
    id: "task",
    title: "1. Task Inquiry & Eligibility",
    content:
      "Clients must provide complete and accurate task details before work begins, including deadlines, instructions, format, rubric (if applicable), and any additional requirements. Academic Commission by JA is not responsible for errors resulting from incomplete, unclear, or late instructions. Requests that violate academic integrity, platform rules, or ethical standards may be declined.",
  },

  {
    id: "payment",
    title: "2. Payment Policy",
    content:
      "Clients may choose to pay either a 50% down payment or full payment before work begins. No payment means no work will start. The remaining balance must be settled before the final output is released. Proof of payment is required for verification.",
  },

  {
    id: "process",
    title: "3. Work Process & Updates",
    content:
      "Regular progress updates will be provided throughout the commission whenever applicable. Clear and timely communication from both parties is expected to avoid delays. Rush tasks may be accommodated depending on availability and may be subject to additional charges.",
  },

  {
    id: "revision",
    title: "4. Revision Policy",
    content:
      "One free revision is available within 24 hours after delivery. To qualify, clients must first leave feedback regarding the completed commission. Requests resulting from incomplete instructions, newly added requirements, or changes beyond the original scope may incur additional charges. Research titles are not eligible for revisions.",
  },

  {
    id: "delivery",
    title: "5. Output Delivery",
    content:
      "Completed files will only be released after full payment has been received. Clients are encouraged to download and keep backup copies immediately after receiving their files. Academic Commission by JA is not responsible for files lost due to deleted conversations, device issues, or storage problems on the client's side.",
  },

  {
    id: "unclaimed",
    title: "6. Unclaimed Outputs",
    content:
      "If a completed commission remains unclaimed because the remaining balance has not been settled, a late fee may apply. Outputs that remain unclaimed after reasonable notice may be used for portfolio or promotional purposes.",
  },

  {
    id: "refund",
    title: "7. Refund Policy",
    content:
      "Payments are generally non-refundable once work has started. If Academic Commission by JA cancels a commission before work begins, any payment already made will be refunded in full.",
  },

  {
    id: "quality",
    title: "8. Quality Assurance",
    content:
      "Every commission undergoes careful review before delivery to ensure accuracy, clarity, and quality. Clients are encouraged to review all completed work before submission.",
  },

  {
    id: "responsibility",
    title: "9. Academic Responsibility",
    content:
      "Academic Commission by JA provides academic assistance, reference materials, and educational support only. Clients remain fully responsible for how completed outputs are used, submitted, modified, or presented in accordance with their institution's policies.",
  },

  {
    id: "confidentiality",
    title: "10. Confidentiality",
    content:
      "All client information, conversations, files, and commissioned work are treated with strict confidentiality. Personal information will never be disclosed without the client's consent except when required by law or when covered by the Unclaimed Outputs policy.",
  },

  {
    id: "termination",
    title: "11. Right to Decline or Terminate",
    content:
      "Academic Commission by JA reserves the right to decline, discontinue, or terminate any commission if these Terms & Conditions are violated or if communication becomes abusive, inappropriate, or unprofessional.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-20">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Legal
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            Please read these Terms & Conditions carefully before placing an
            order. These guidelines are intended to protect both the client and
            Academic Commission by JA while ensuring a professional, transparent,
            and reliable experience.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Last Updated • July 2026
          </p>

        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[260px_1fr]">

          <aside className="lg:sticky lg:top-28 h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="font-bold text-slate-900">
              Contents
            </h2>

            <nav className="mt-5 space-y-3 text-sm">

              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-slate-600 transition hover:text-[#487DB2]"
                >
                  {section.title}
                </a>
              ))}

            </nav>

          </aside>

          <div className="space-y-6">

            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-slate-900">
                  {section.title}
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  {section.content}
                </p>
              </section>
            ))}
                        <div className="rounded-3xl bg-gradient-to-r from-[#487DB2] to-[#5A90C7] p-10 text-center text-white shadow-lg">

              <h2 className="text-3xl font-bold">
                By sending payment, you automatically agree to the terms stated above. 
              </h2>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

                <a
                  href="https://forms.gle/zkBAB9NCjGtvmiSF7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-6 py-3 font-semibold text-[#487DB2] transition hover:scale-105 hover:shadow-lg"
                >
                  📝 Place an Order
                </a>

                <Link
                  href="/"
                  className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#487DB2]"
                >
                  ← Back to Home
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}