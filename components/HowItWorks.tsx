const steps = [
  {
    step: 1,
    icon: "📩",
    title: "Submit Your Request",
    description:
      "Fill out the order form and provide your requirements.",
  },
  {
    step: 2,
    icon: "💬",
    title: "Receive a Quote",
    description:
      "We'll review your request and send you the price and timeline.",
  },
  {
    step: 3,
    icon: "🛠️",
    title: "Work in Progress",
    description:
      "Our team starts working while keeping you updated.",
  },
  {
    step: 4,
    icon: "✅",
    title: "Receive Your Files",
    description:
      "Download your completed work before the deadline.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Process
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Getting academic assistance has never been easier.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Desktop timeline connector */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 lg:block" />

          <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((item, index) => (
              <div key={item.title} className="relative flex lg:flex-col lg:items-center">
                {/* Mobile timeline connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-blue-400 to-blue-200 lg:hidden" />
                )}

                {/* Step number badge */}
                <div className="relative z-10 flex shrink-0 items-start gap-4 lg:flex-col lg:items-center lg:gap-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-bold text-white shadow-md shadow-blue-600/30 ring-4 ring-white lg:mb-6">
                    {item.step}
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg lg:mt-0 lg:text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl lg:mx-auto">
                      {item.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
