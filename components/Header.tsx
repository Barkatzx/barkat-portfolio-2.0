import Image from "next/image";
import Link from "next/link";
import logo from "../public/img/logo.png";

export default function Header() {
  return (
    <header className="bg-[#f9f6f3] flex items-center justify-between px-4 py-3 rounded-t-xl">
      {/* Left - Logo */}
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold">
          <Image src={logo} alt="logo" />
        </Link>
      </div>

      {/* Center - Navigation */}
      <nav className="flex-1 flex justify-center rounded-tr-2xl bg-white/50 backdrop-blur-sm px-6 py-2">
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Right - Empty (for balance) */}
      <div className="flex-1"></div>
    </header>
  );
}
