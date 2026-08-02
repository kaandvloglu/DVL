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
      id="hero"
      className="relative overflow-hidden bg-[#070B14]"
    >
      {/* Background */}

      <GlowBackground />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative z-10">

        <div className="grid min-h-screen items-center gap-20 py-36 lg:grid-cols-[1fr_1.1fr]">

          {/* LEFT */}

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >

            {/* Badge */}

            <div className="inline-flex items-center rounded-full border border-dvl-accent/20 bg-dvl-accent/10 px-5 py-2 text-sm font-medium text-dvl-accent">

              Built for Elite Ice Hockey

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-extrabold leading-[1.02] tracking-tight text-white md:text-7xl">

              Performance

              <br />

              Analytics

              <span className="mt-5 block text-dvl-accent">

                for Elite Ice Hockey

              </span>

            </h1>

            {/* Description */}

            <p className="mt-10 max-w-xl text-lg leading-9 text-dvl-text-secondary">

              DVL combines smart textiles, embedded electronics and
              artificial intelligence into one lightweight wearable
              platform that delivers real-time performance analytics
              for elite athletes and professional coaching staff.

            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <PrimaryButton href="#technology">

                Explore Technology

              </PrimaryButton>

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  px-8
                  py-4
                  font-medium
                  text-white
                  transition
                  duration-300
                  hover:border-dvl-accent
                  hover:bg-white/5
                "
              >

                Contact Us

                <ArrowRight size={18} />

              </a>

            </div>

            {/* Metrics */}

            <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">

              <div>

                <h3 className="text-4xl font-bold text-white">

                  AI

                </h3>

                <p className="mt-3 leading-7 text-dvl-text-secondary">

                  Performance
                  <br />
                  Analytics

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-white">

                  BLE

                </h3>

                <p className="mt-3 leading-7 text-dvl-text-secondary">

                  Wireless
                  <br />
                  Connectivity

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-white">

                  IMU

                </h3>

                <p className="mt-3 leading-7 text-dvl-text-secondary">

                  Motion
                  <br />
                  Tracking

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="relative flex justify-end"
          >

            {/* Orange Glow */}

            <div className="absolute right-16 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-dvl-accent/15 blur-[160px]" />

            {/* Product Card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                p-8
              "
            >
                            <Image
                src="/images/hero/product-render.png"
                alt="DVL Smart Textile Platform"
                width={900}
                height={900}
                priority
                className="
                  relative
                  z-10
                  w-full
                  max-w-[720px]
                  object-contain
                  drop-shadow-[0_40px_80px_rgba(0,0,0,.45)]
                "
              />

              {/* Floating Label */}

              <div
                className="
                  absolute
                  left-8
                  top-8
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#111827]/80
                  px-5
                  py-4
                  backdrop-blur-xl
                "
              >

                <p className="text-xs uppercase tracking-[0.3em] text-dvl-text-secondary">
                  Smart Textile
                </p>

                <h4 className="mt-2 text-lg font-semibold text-white">
                  AI Wearable Platform
                </h4>

              </div>

              {/* Bottom Right Card */}

              <div
                className="
                  absolute
                  bottom-8
                  right-8
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#111827]/80
                  px-6
                  py-5
                  backdrop-blur-xl
                "
              >

                <div className="flex items-center gap-4">

                  <div className="h-3 w-3 rounded-full bg-dvl-green" />

                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-dvl-text-secondary">
                      Status
                    </p>

                    <h4 className="mt-1 text-lg font-semibold text-white">
                      Live Monitoring
                    </h4>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>
            {/* Scroll Indicator */}

            <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">

<motion.div
  animate={{
    y: [0, 10, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="flex flex-col items-center gap-3"
>

  <span className="text-[11px] uppercase tracking-[0.45em] text-dvl-text-secondary">

    Scroll

  </span>

  <ChevronDown
    size={24}
    className="text-dvl-accent"
  />

</motion.div>

</div>

</section>
);
}