"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

const navItems = [
  { label: "Technology", href: "#technology" },
  { label: "Solution", href: "#solution" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <Container>

        <div
          className={`
            mt-5
            flex
            h-20
            items-center
            justify-between
            rounded-2xl
            border
            px-8
            transition-all
            duration-300

            ${
              scrolled
                ? "border-white/10 bg-[#0B1220]/90 shadow-2xl backdrop-blur-2xl"
                : "border-white/5 bg-[#0B1220]/55 backdrop-blur-xl"
            }
          `}
        >

          {/* Logo */}

          <Link href="/" className="flex flex-col">

            <span className="text-3xl font-bold tracking-[0.28em] text-white">
              DVL
            </span>

            <span className="mt-1 text-[11px] uppercase tracking-[0.42em] text-dvl-text-secondary">
              SMART TEXTILES
            </span>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  text-[15px]
                  font-medium
                  text-dvl-text-secondary
                  transition
                  duration-300
                  hover:text-white
                "
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