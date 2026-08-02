"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import GlowBackground from "@/components/ui/GlowBackground";

import { fadeInUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#070B14]"
      id="hero"
    >
      {/* Background Glow */}
      <GlowBackground />

      {/* Hero Image */}
      <div className="absolute inset-0">
          <Image
          src="/images/hero/product-render.webp"
          alt="DVL Smart Textile"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-[82%_center]"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/95 via-[42%] to-transparent" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative z-10">
        <div className="flex min-h-screen items-center">

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl pt-28 pb-16"
          >

            {/* Badge */}

            <div className="inline-flex items-center rounded-full border border-dvl-accent/20 bg-dvl-accent/10 px-5 py-2 text-sm font-medium text-dvl-accent">

              Built for Elite Ice Hockey

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">

              Performance
              <br />

              Analytics

              <span className="block mt-4 text-dvl-accent">

                for Elite Ice Hockey

              </span>

            </h1>

            {/* Description */}

            <p className="mt-10 max-w-xl text-lg leading-9 text-dvl-text-secondary">

              DVL combines smart textiles, embedded sensors and AI-powered
              analytics to deliver real-time performance insights for athletes
              and coaching staff.

            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <PrimaryButton href="#technology">

                Explore Technology

              </PrimaryButton>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-white transition duration-300 hover:border-dvl-accent hover:bg-white/5"
              >
                Contact Us

                <ArrowRight size={18} />

              </a>

            </div>

            {/* Metrics */}

            <div className="mt-20 grid max-w-xl grid-cols-3 gap-10 border-t border-white/10 pt-10">

              <div>

                <h3 className="text-4xl font-bold text-white">

                  AI

                </h3>

                <p className="mt-3 text-dvl-text-secondary">

                  Real-Time
                  <br />
                  Analytics

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-white">

                  BLE

                </h3>

                <p className="mt-3 text-dvl-text-secondary">

                  Wireless
                  <br />
                  Connectivity

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-white">

                  IMU

                </h3>

                <p className="mt-3 text-dvl-text-secondary">

                  Motion
                  <br />
                  Tracking

                </p>

              </div>

            </div>

          </motion.div>

        </div>
      </Container>

      {/* Scroll */}

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">

        <div className="flex flex-col items-center gap-2">

          <span className="text-xs tracking-[0.4em] text-dvl-text-secondary">

            SCROLL

          </span>

          <ChevronDown
            className="animate-bounce text-dvl-accent"
            size={24}
          />

        </div>

      </div>

    </section>
  );
}