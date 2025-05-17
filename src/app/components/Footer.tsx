import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="relative w-36 h-10 mb-4">
            <Image
              src="https://www.trymintly.com/_next/image?url=%2Fstatic%2Fimages%2Fmintly.webp&w=3840&q=75"
              alt="Mintly Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mb-2">
            On a mission to build the Hiring Marketplace for Gems, Jewelry and
            Precious Metals Industry.
          </p>
          <p className="text-sm text-gray-500">
            Currently serving metro cities in India, Dubai, Cambodia and Midwest
            USA.
          </p>
          <div className="mt-4">
            <a
              href="mailto:support@trymintly.com"
              className="flex items-center space-x-2 text-blue-700 hover:underline"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>support@trymintly.com</span>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/companies" className="hover:underline">
                Companies
              </Link>
            </li>
            <li>
              <Link href="/login/job-seeker" className="hover:underline">
                Account
              </Link>
            </li>
            <li>
              <Link href="/gold-rate" className="hover:underline">
                Gold Rate
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms/job-seeker" className="hover:underline">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/premium-hiring" className="hover:underline">
                Premium Hiring
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/hr-support" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/background-check" className="hover:underline">
                Background Check
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Join</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/signup/job-seeker" className="hover:underline">
                As JobSeeker
              </Link>
            </li>
            <li>
              <Link href="/signup/employer" className="hover:underline">
                As Employer
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © Mintly LLC 2025 (Operated by <strong>TB12 Technology Services Pvt Ltd</strong>)
      </div>
    </footer>
  );
}
