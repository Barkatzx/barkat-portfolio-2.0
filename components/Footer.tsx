"use client";

import logo from "@/public/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  SiBuymeacoffee,
  SiFiverr,
  SiFreelancer,
  SiUpwork,
} from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#f9f6f3] py-12 px-5 md:px-20 rounded-t-2xl">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          {/* First Column - Logo, Copyright, Social */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <Image
                src={logo}
                alt="Barkat Ullah Logo"
                width={160}
                height={40}
                priority
              />
            </div>
            <p className="text-gray-600 mb-6 text-center md:text-left">
              © Barkat Ullah {currentYear}. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                href="https://github.com/barkatzx"
                Icon={FaGithub}
                label="GitHub"
              />
              <SocialLink
                href="https://linkedin.com/in/barkatzx"
                Icon={FaLinkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="https://facebook.com/barkatzx"
                Icon={FaFacebook}
                label="Facebook"
              />
              <SocialLink
                href="https://youtube.com/barkatzx"
                Icon={FaYoutube}
                label="YouTube"
              />
            </div>
          </div>

          {/* Second Column - Menu */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-[Recoleta] text-xl font-bold mb-6">Menu</h3>
            <ul className="space-y-3 text-center md:text-left">
              {["About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-sky-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column - Platforms */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-[Recoleta] text-xl font-bold mb-6">Hire Me</h3>
            <ul className="space-y-3 text-center md:text-left">
              <HireLink
                href="https://upwork.com/freelancers/barkatzx"
                Icon={SiUpwork}
                label="Upwork"
              />
              <HireLink
                href="https://fiverr.com/barkatzx"
                Icon={SiFiverr}
                label="Fiverr"
              />
              <HireLink
                href="https://freelancer.com/u/barkatzx"
                Icon={SiFreelancer}
                label="Freelancer"
              />
              <HireLink
                href="https://buymeacoffee.com/barkatzx"
                Icon={SiBuymeacoffee}
                label="Buy Me Coffee"
              />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

// 🔹 Social Media Button Component
function SocialLink({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="bg-white p-3 rounded-full hover:bg-sky-100 transition-colors"
      aria-label={label}
    >
      <Icon className="text-gray-800 text-xl" />
    </Link>
  );
}

// 🔹 Hire Me Link Component
function HireLink({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <li>
      <Link
        href={href}
        target="_blank"
        className="flex items-center justify-center md:justify-start text-gray-600 hover:text-sky-400 transition-colors"
      >
        <Icon className="mr-2 text-lg" /> {label}
      </Link>
    </li>
  );
}
