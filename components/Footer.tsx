import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import SocialIcons from "@/components/SocialIcons";
import { company, services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 text-gray-300">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-mark.png"
              alt=""
              className="h-9 w-9 object-contain"
            />
            {company.name}
          </div>
          <p className="mt-4 max-w-xs text-sm text-gray-400">
            Where your brand&apos;s success becomes our story.
          </p>
          <SocialIcons variant="dark" className="mt-5" />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href="/services" className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/work" className="hover:text-white">Our Work</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Stay in the loop</h4>
          <p className="mt-4 text-sm text-gray-400">
            Get marketing insights in your inbox. No spam, ever.
          </p>
          <div className="mt-4">
            <Newsletter />
          </div>
          <ul className="mt-6 space-y-1.5 text-sm">
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li>
              <a href={`tel:${company.phone}`} className="hover:text-white">
                {company.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-gray-500 sm:flex-row">
          <p>© {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
