"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

const navigation = [
  {
    title: "Technology",
    href: "#technology",
  },
  {
    title: "Solution",
    href: "#solution",
  },
  {
    title: "Roadmap",
    href: "#roadmap",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = navigation.map((item) =>
        document.querySelector(item.href)
      );

      let current = "";

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = navigation[index].href;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/60 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container>

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link href="/" className="group">

            <div className="flex flex-col">

              <span className="text-2xl font-bold tracking-[0.35em] text-white transition group-hover:text-dvl-accent">
                DVL
              </span>

              <span className="text-[10px] uppercase tracking-[0.35em] text-dvl-text-secondary">
                SMART TEXTILE
              </span>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">

            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`relative text-sm transition-all duration-300 ${
                  activeSection === item.href
                    ? "text-white"
                    : "text-dvl-text-secondary hover:text-white"
                }`}
              >
                {item.title}

                {activeSection === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-dvl-accent"
                  />
                )}
              </a>
            ))}

          </nav>

          {/* Desktop Button */}

          <div className="hidden lg:block">

            <PrimaryButton href="#contact">
              Request Pilot
            </PrimaryButton>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-white lg:hidden"
          >
            {mobileMenu ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </Container>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileMenu && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="border-t border-white/10 bg-[#0A0E17]/95 backdrop-blur-xl lg:hidden"
          >

            <Container>

              <div className="flex flex-col py-8">

                {navigation.map((item) => (

                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="border-b border-white/5 py-5 text-lg text-dvl-text-secondary transition hover:text-white"
                  >
                    {item.title}
                  </a>

                ))}

                <div className="mt-8">

                  <PrimaryButton href="#contact">
                    Request Pilot
                  </PrimaryButton>

                </div>

              </div>

            </Container>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}