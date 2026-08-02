"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";
import GlowBackground from "@/components/ui/GlowBackground";
import PrimaryButton from "@/components/ui/PrimaryButton";

import { fadeInUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-dvl-bg">

      <GlowBackground />

      {/* Grid Background */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Left Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E17] via-[#0A0E17]/80 to-transparent" />

      <Container className="relative z-10">

        <div className="grid min-h-[92vh] items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">

          {/* LEFT */}

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center rounded-full border border-dvl-accent/20 bg-dvl-accent/10 px-5 py-2"
            >
              <span className="mr-2 text-lg">🏒</span>

              <span className="text-sm font-medium text-dvl-accent">
                Built for Elite Ice Hockey
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-8 text-5xl font-bold leading-[1.03] tracking-tight text-white md:text-7xl"
            >
              Performance
              <br />

              Analytics

              <span className="mt-3 block text-dvl-accent">
                for Elite Ice Hockey
              </span>

            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-xl text-lg leading-8 text-dvl-text-secondary"
            >
              DVL combines smart textiles, embedded sensors and
              AI-powered analytics to deliver real-time performance
              insights for athletes and coaching staff.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-12 flex flex-wrap gap-5"
            >

              <PrimaryButton href="#technology">
                Explore Technology
              </PrimaryButton>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3 font-medium text-white transition-all duration-300 hover:border-dvl-accent hover:bg-white/5"
              >
                Contact

                <ArrowRight size={18} />

              </a>

            </motion.div>

            {/* Metrics */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >

              <div>

                <h3 className="text-3xl font-bold text-white">
                  AI
                </h3>

                <p className="mt-2 text-sm leading-6 text-dvl-text-secondary">
                  Real-Time
                  <br />
                  Analytics
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-white">
                  BLE
                </h3>

                <p className="mt-2 text-sm leading-6 text-dvl-text-secondary">
                  Wireless
                  <br />
                  Connectivity
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-white">
                  IMU
                </h3>

                <p className="mt-2 text-sm leading-6 text-dvl-text-secondary">
                  Motion
                  <br />
                  Tracking
                </p>

              </div>

            </motion.div>

          </motion.div>
                    {/* RIGHT */}

                    <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Main Glow */}

            <div className="absolute h-[700px] w-[700px] rounded-full bg-dvl-accent/15 blur-[180px]" />

            {/* Secondary Glow */}

            <div className="absolute h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />

            {/* Floating Product */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              whileHover={{
                scale: 1.03,
                rotate: -1,
              }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 0.3,
                },
                rotate: {
                  duration: 0.3,
                },
              }}
              className="relative z-20"
            >
              <Image
                src="/images/hero/product-render.png"
                alt="DVL Smart Textile Module"
                width={750}
                height={750}
                priority
                className="w-full max-w-[700px] object-contain drop-shadow-[0_60px_120px_rgba(240,136,62,0.45)]"
              />
            </motion.div>

            {/* Floating Card 1 */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute right-0 top-20 hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl lg:block"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-dvl-text-secondary">
                Sensor
              </p>

              <h4 className="mt-2 text-xl font-semibold text-white">
                6-Axis IMU
              </h4>
            </motion.div>

            {/* Floating Card 2 */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-28 left-0 hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl lg:block"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-dvl-text-secondary">
                Connectivity
              </p>

              <h4 className="mt-2 text-xl font-semibold text-white">
                Bluetooth 5.2
              </h4>
            </motion.div>

            {/* Floating Card 3 */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35 }}
              className="absolute bottom-8 right-24 hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl lg:block"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-dvl-text-secondary">
                Platform
              </p>

              <h4 className="mt-2 text-xl font-semibold text-white">
                AI Analytics
              </h4>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-dvl-text-secondary">
          Scroll
        </p>

        <ChevronDown className="animate-bounce text-dvl-accent" />
      </motion.div>
    </section>
  );
}