import Image from "next/image";
import { ORDER_FORM_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

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

                <p className="text-sm text-blue-600">
                  by JA
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Quality academic assistance for students who value excellence,
              reliability, confidentiality, and on-time submissions.
            </p>

            <p className="mt-4 font-semibold text-[#487DB2]">
              Quality Work. On Time. Every Time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-900">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-600">

              <li>
                <a href="#" className="transition hover:text-[#487DB2]">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-[#487DB2]">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="transition hover:text-[#487DB2]">
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="transition hover:text-[#487DB2]"
                >
                  Process
                </a>
              </li>

              <li>
                <a
                  href="#feedbacks"
                  className="transition hover:text-[#487DB2]"
                >
                  Feedbacks
                </a>
              </li>

              <li>
                <a href="#faq" className="transition hover:text-[#487DB2]">
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="/terms"
                  className="transition hover:text-[#487DB2]"
                >
                  Terms & Conditions
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-900">
              Connect With Us
            </h4>

            <div className="space-y-6">

              <div>
                <p className="font-semibold text-slate-900">
                  Facebook
                </p>

                <a
                  href="https://www.facebook.com/acadcommsbyja/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 transition hover:text-[#487DB2]"
                >
                  Academic Commission by JA
                </a>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Telegram
                </p>

                <a
                  href="https://t.me/+t_ZUKfZP_pRiMmY1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 transition hover:text-[#487DB2]"
                >
                  Join our Telegram Channel
                </a>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Email
                </p>

                <a
                  href="mailto:workwithja.biz@gmail.com"
                  className="text-slate-600 transition hover:text-[#487DB2]"
                >
                  workwithja.biz@gmail.com
                </a>
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
                href="https://www.facebook.com/acadcommsbyja/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#487DB2] px-5 py-2 text-sm font-semibold text-[#487DB2] transition hover:bg-blue-50"
              >
                Facebook
              </a>

              <a
                href="https://forms.gle/zkBAB9NCjGtvmiSF7"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#487DB2] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
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