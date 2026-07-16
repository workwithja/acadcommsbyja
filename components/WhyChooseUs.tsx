const features = [
  {
    icon: "⭐",
    title: "High Quality Outputs",
    description:
      "Every project is carefully reviewed to ensure quality, originality, and professionalism.",
  },
  {
    icon: "⏰",
    title: "On-Time Delivery",
    description:
      "Meet your deadlines with confidence through reliable and timely service.",
  },
  {
    icon: "🔒",
    title: "100% Confidential",
    description:
      "All client information and submitted files remain private and secure.",
  },
  {
    icon: "💬",
    title: "Responsive Support",
    description:
      "Receive quick updates and friendly assistance throughout your order.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Why Choose Us
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for students who expect more
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Reliable academic support with the quality, speed, and care you
            deserve.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
