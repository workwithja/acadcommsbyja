import {
  ClipboardList,
  MessagesSquare,
  CreditCard,
  SearchCheck,
  FolderCheck,
  BadgeCheck,
  ShieldCheck,
  Clock3,
  Workflow,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Order Submission Form",
    description:
      "Complete the Order Submission Form by providing your requirements, deadline, preferred communication platform, and supporting files. This allows us to review your request accurately before accepting your commission.",
    button: "Open Order Form",
    link: "https://forms.gle/zkBAB9NCjGtvmiSF7",
  },

  {
    number: "02",
    icon: MessagesSquare,
    title: "Review & Confirmation",
    description:
      "We'll contact you through your preferred communication platform to confirm your request, discuss the quotation, estimated turnaround time, and answer any questions before proceeding.",
  },

  {
    number: "03",
    icon: CreditCard,
    title: "Payment Confirmation Form",
    description:
      "After approving the quotation, complete the required payment and submit your proof of payment through our Payment Confirmation Form. Once verified, your commission will be assigned a unique Task Code and officially recorded in our system.",
    button: "Open Payment Form",
    link: "https://forms.gle/Lm6jvEnSGCJTen4C8",
  },

  {
    number: "04",
    icon: SearchCheck,
    title: "Order Tracking System",
    description:
      "Track your commission anytime using our Telegram Order Tracking System. Simply enter your Task Code to monitor your order status—even when we're temporarily offline.",
    button: "Track My Order",
    link: "https://t.me/acadcommsbyja_bot",
  },

  {
    number: "05",
    icon: FolderCheck,
    title: "Preview & Final Delivery",
    description:
      "Once your commission is completed, you'll receive a preview for final checking. After the remaining balance has been settled (if applicable), your completed editable files will be released immediately.",
  },
];

const benefits = [
  {
    icon: Workflow,
    title: "Fast & Organized",
    description:
      "Every commission is securely recorded and managed from submission to final delivery.",
  },

  {
    icon: BadgeCheck,
    title: "Real-Time Tracking",
    description:
      "Monitor your commission anytime using your Task Code through our Order Tracking System.",
  },

  {
    icon: ShieldCheck,
    title: "Secure & Transparent",
    description:
      "Requirements, payments, and project updates are organized in one centralized workflow.",
  },

  {
    icon: Clock3,
    title: "Works Even When We're Offline",
    description:
      "Orders and payment confirmations submitted through our online forms are automatically recorded and queued for processing.",
  },
];

export default function Process() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Process
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Commission Process
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            A simple, transparent, and organized workflow designed to keep every
            commission secure, trackable, and hassle-free from inquiry to final
            delivery.
          </p>

        </div>

        <div className="mt-16 space-y-8">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                    <Icon
                      size={30}
                      className="text-[#487DB2]"
                    />
                  </div>

                  <div className="flex-1">

                    <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-[#487DB2]">
  {step.number}
</div>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {step.description}
                    </p>

                    {step.button && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex rounded-xl bg-[#487DB2] px-6 py-3 font-semibold text-white transition hover:opacity-90"
                      >
                        {step.button}
                      </a>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
                  </div>

        <div className="mt-20">

          <div className="text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Why Choose Our System
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
              Built for a Better Client Experience
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-3xl border border-blue-100 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#487DB2] hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-[#487DB2]">

                    <Icon
                      size={28}
                      className="text-[#487DB2] group-hover:text-white"
                    />

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {benefit.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}