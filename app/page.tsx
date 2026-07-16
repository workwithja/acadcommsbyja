import { ORDER_FORM_URL } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Trusted Academic Support
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
            Academic Commission
            <span className="block text-[#487DB2]">by JA</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg text-slate-600 md:text-xl">
            Premium academic writing and research services delivered with
            precision, integrity, and on-time results.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#487DB2] px-8 py-4 font-semibold text-white transition hover:bg-[#3d6d9c]"
            >
              📝 Place an Order
            </a>

            <a
              href="#services"
              className="rounded-xl border border-[#487DB2] px-8 py-4 font-semibold text-[#487DB2] transition hover:bg-blue-50"
            >
              📚 View Services
            </a>
          </div>
        </section>

        {/* Homepage Sections */}
        <WhyChooseUs />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}