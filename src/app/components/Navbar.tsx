import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="relative w-36 h-8 block">
          <Image
            src="https://www.trymintly.com/_next/image?url=%2Fstatic%2Fimages%2Fmintly.webp&w=3840&q=75"
            alt="Mintly Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/blog" className="text-blue-700 hover:underline">
            Blog
          </Link>
          <Link href="/jobs" className="text-blue-700 hover:underline">
            Jobs
          </Link>
          <a
            href="https://www.youtube.com/channel/UC78d4aXC-U6zYlKSCGDD0fg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            YouTube
          </a>
        </nav>
        <a
          href="mailto:support@trymintly.com"
          className="text-blue-700 hidden sm:inline-flex items-center space-x-1"
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
    </header>
  );
}
