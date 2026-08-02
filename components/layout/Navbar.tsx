"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

const navItems = [
  {
    label: "Technology",
    href: "#technology",
  },
  {
    label: "Solution",
    href: "#solution",
  },
  {
    label: "Roadmap",
    href: "#roadmap",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div className="mt-5 flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-[#070B14]/70 px-8 backdrop-blur-xl">

          {/* Logo */}

          <Link href="/" className="flex flex-col leading-none">

            <span className="text-4xl font-bold tracking-[0.25em] text-white">
              DVL
            </span>

            <span className="mt-1 text-[11px] uppercase tracking-[0.45em] text-dvl-text-secondary">
              SMART TEXTILES
            </span>

          </Link>

          {/* Navigation */}

          <nav className="hidden items-center gap-12 lg:flex">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[17px] text-dvl-text-secondary transition duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}

          </nav>

          {/* CTA */}

          <div className="hidden lg:block">

            <PrimaryButton href="#contact">

              Request Pilot

              <ArrowRight size={18} />

            </PrimaryButton>

          </div>

        </div>
      </Container>
    </header>
  );
}