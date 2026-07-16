import {
  BookOpen,
  GraduationCap,
  Palette,
  FileCheck,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Academic Writing",
    description:
      "Professional writing assistance tailored to meet academic standards.",
    items: [
      "Essays",
      "Reflection Papers",
      "Reaction Papers",
      "Position Papers",
      "Creative Writing",
      "& More",
    ],
  },
  {
    icon: GraduationCap,
    title: "Research",
    description:
      "Reliable research assistance from titles to complete chapters.",
    items: [
      "Research Papers",
      "RRL & RRS",
      "Chapter 1–5",
      "Research Titles",
      "Statistics",
      "& More",
    ],
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Clean, professional, and presentation-ready academic designs.",
    items: [
      "PowerPoint",
      "Infographics",
      "Posters",
      "Brochures",
      "Portfolios",
      "& More",
    ],
  },
  {
    icon: FileCheck,
    title: "Editing",
    description:
      "Enhance clarity, grammar, formatting, and overall document quality.",
    items: [
      "Proofreading",
      "Grammar Checking",
      "Formatting",
      "Paraphrasing",
      "Summarizing",
      "& More",
    ],
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
            Comprehensive academic support designed to help students achieve
            better results with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-[#487DB2]">
                  <Icon
                    size={28}
                    className="text-[#487DB2] group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <div className="h-2 w-2 rounded-full bg-[#487DB2]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#487DB2] to-[#5A90C7] p-10 text-center text-white">

          <h3 className="text-3xl font-bold">
            Need Something Else?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-blue-100">
            We also accept lesson plans, case studies, resumes, curriculum
            vitae, cover letters, transcription, document formatting,
            infographics, brochures, portfolios, photo and video editing,
            grammar checking, paraphrasing, summarizing, and many more.
          </p>

          <p className="mt-6 text-lg font-semibold">
            Don't see your task listed? Feel free to inquire.
          </p>

        </div>

      </div>
    </section>
  );
}