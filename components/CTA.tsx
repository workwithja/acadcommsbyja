export default function CTA() {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#487DB2] to-[#6FA8DC] p-10 text-white shadow-2xl lg:p-16">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
              🚀 Ready to Get Started?
            </span>
  
            <h2 className="mt-6 text-4xl font-bold lg:text-6xl">
              Need Academic Assistance?
            </h2>
  
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              Whether it's research, thesis, presentations, essays, or other
              academic requirements, Academic Commission by Ja is here to help
              you submit quality work on time.
            </p>
  
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://forms.gle/zkBAB9NCjGtvmiSF7"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-[#487DB2] transition hover:scale-105 hover:shadow-xl"
              >
                📝 Place an Order
              </a>
  
              <a
                href="https://www.facebook.com/acadcommsbyja/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-[#487DB2]"
              >
                📘 Visit Facebook
              </a>
  
              <a
                href="https://t.me/+t_ZUKfZP_pRiMmY1"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-[#487DB2]"
              >
                ✈️ Join Telegram
              </a>
            </div>
  
            <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h3 className="font-semibold">✅ Quality Work</h3>
                <p className="mt-2 text-sm text-blue-100">
                  Every project is carefully reviewed before delivery.
                </p>
              </div>
  
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h3 className="font-semibold">⏰ On-Time Delivery</h3>
                <p className="mt-2 text-sm text-blue-100">
                  We value deadlines and always strive to deliver on time.
                </p>
              </div>
  
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h3 className="font-semibold">🔒 Confidential Service</h3>
                <p className="mt-2 text-sm text-blue-100">
                  Your files and personal information remain private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }