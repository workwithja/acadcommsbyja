const services = [
  {
    icon: "📄",
    title: "Research Papers",
    description:
      "In-depth research with proper citations, academic formatting, and scholarly rigor.",
  },
  {
    icon: "🎓",
    title: "Thesis Assistance",
    description:
      "Expert guidance from proposal development to polished, defense-ready chapters.",
  },
  {
    icon: "📊",
    title: "PowerPoint Presentations",
    description:
      "Engaging slides with clear visuals, structured content, and speaker notes.",
  },
  {
    icon: "📝",
    title: "Reflection Papers",
    description:
      "Thoughtful personal insights thoughtfully connected to course concepts and experiences.",
  },
  {
    icon: "📚",
    title: "Case Studies",
    description:
      "Detailed analysis of real-world scenarios backed by evidence-based conclusions.",
  },
  {
    icon: "📖",
    title: "Essay Writing",
    description:
      "Clear, well-structured essays across all subjects and academic levels.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Services
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Academic Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Professional academic assistance tailored to help students succeed.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <button className="mt-6 w-fit rounded-lg border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:border-blue-300 hover:bg-blue-50">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
