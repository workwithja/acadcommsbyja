import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Academic Commission by JA"
                width={55}
                height={55}
                className="rounded-xl"
              />

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Academic Commission
                </h3>
                <p className="text-sm text-blue-600">by JA</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Quality academic assistance for students who value excellence,
              reliability, and on-time submissions.
            </p>

            <p className="mt-4 font-medium text-blue-600">
              Quality Work. On Time. Every Time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-900">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#services" className="hover:text-blue-600">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-blue-600">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-900">
              Popular Services
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li>Research Papers</li>
              <li>Thesis Assistance</li>
              <li>Case Studies</li>
              <li>Reflection Papers</li>
              <li>PowerPoint Presentations</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-900">
              Contact
            </h4>

            <div className="space-y-4 text-slate-600">

              <div>
                <p className="font-medium text-slate-900">Facebook</p>
                <p>Academic Commission by JA</p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Messenger</p>
                <p>@acadcomms_byja</p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Business Hours</p>
                <p>Monday - Sunday</p>
                <p>8:00 AM - 10:00 PM</p>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-14 border-t border-slate-200 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-slate-500">
              © 2026 Academic Commission by JA. All Rights Reserved.
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Message Us
              </a>

              <a
                href="#"
                className="rounded-lg border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Order Now
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}