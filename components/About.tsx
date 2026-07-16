export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            About
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Academic Commission by JA
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Academic Commission by JA is a trusted academic assistance service
            established in December 2022, dedicated to providing reliable,
            confidential, and high-quality academic support for students across
            the Philippines. Founded by a Licensed Professional Teacher with a
            Bachelor of Secondary Education major in English, the brand has
            successfully completed over <strong>4,600 academic commissions</strong>
            through professionalism, integrity, and timely delivery.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We specialize in academic writing, research assistance,
            presentations, editing, and educational support services. Every
            project is handled with accuracy, confidentiality, and genuine care
            to help students achieve their academic goals with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
              🎓
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Licensed Professional Teacher
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Professional academic assistance founded by a Licensed
              Professional Teacher committed to quality, integrity, and
              excellence.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
              📅
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Established Since December 2022
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Providing dependable academic support to thousands of Filipino
              students through professional service and on-time delivery.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
              📚
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              4,600+ Academic Commissions
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Successfully completed academic writing, research, editing,
              presentations, and other educational projects with consistent
              client satisfaction.
            </p>
          </div>

        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#487DB2] to-[#5A90C7] px-8 py-10 text-center text-white">

          <p className="text-sm uppercase tracking-[0.25em] text-blue-100">
            Our Commitment
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            Quality Work. On Time. Every Time.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Every commission is handled with professionalism, confidentiality,
            and attention to detail to ensure a smooth and reliable experience
            from inquiry to final delivery.
          </p>

        </div>

      </div>
    </section>
  );
}