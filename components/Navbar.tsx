import { ORDER_FORM_URL } from "@/lib/constants";
import Image from "next/image";

export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
  
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Academic Commission by JA"
              width={50}
              height={50}
              className="rounded"
            />
  
            <div>
              <h1 className="font-bold text-slate-900">
                Academic Commission
              </h1>
  
              <p className="text-sm text-blue-600">
                by JA
              </p>
            </div>
          </div>
  
          <div className="hidden gap-8 md:flex">
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
  
          <a
  href={ORDER_FORM_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
>
  Order Now
</a>
  
        </nav>
      </header>
    );
  }
