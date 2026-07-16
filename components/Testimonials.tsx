const feedbacks = [
  {
    name: "Joshua G.",
    initial: "A",
    review:
      "Thank you for doing my conceptual framework. Ang galing ng pagkakagawa, no AI, and mabilis pa. Budget friendly din. Thank you again!",
  },
  {
    name: "Jae H.",
    initial: "M",
    review:
      "Thank you for my theoretical framework at such a great price. I definitely recommend you and babalik ulit ako.",
  },
  {
    name: "Patrick G.",
    initial: "J",
    review:
      "Thank you so much! We had so many ideas but couldn't construct proper research titles. You were such a lifesaver.",
  },
  {
    name: "Anne B.",
    initial: "C",
    review:
      "Thank you for doing my RRL. Ang bilis niyo gumawa. Big help sa akin since busy rin sa work.",
  },
  {
    name: "Maria T.",
    initial: "H",
    review:
      "Very life saver! Hindi ko talaga alam paano sisimulan yung research. 100% babalikan ko talaga.",
  },
  {
    name: "Trisha B.",
    initial: "S",
    review:
      "Thank you so much! Laking tulong niyo sa amin. Sa inyo lang talaga kami may tiwala pagdating sa academic papers.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Feedbacks() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Feedbacks
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
  What Our Clients Say
</h2>
          <p className="mt-4 text-lg text-slate-600">
            Real feedback from students who trusted Academic Commission by JA.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((feedbacks) => (
            <div
              key={feedbacks.name}
              className="flex flex-col rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-lg font-bold text-white">
                  {feedbacks.initial}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    {feedbacks.name}
                  </p>
                  <StarRating />
                </div>
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{feedbacks.review}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
