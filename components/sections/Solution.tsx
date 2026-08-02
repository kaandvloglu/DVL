"use client";

import { motion } from "framer-motion";
import {
  Shirt,
  Cpu,
  Bluetooth,
  BrainCircuit,
  Smartphone,
} from "lucide-react";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

import { fadeInUp } from "@/lib/animations";

const steps = [
  {
    icon: Shirt,
    title: "Smart Textile",
    description:
      "Comfortable performance garment designed for seamless integration into training.",
  },
  {
    icon: Cpu,
    title: "Embedded Module",
    description:
      "A detachable electronic module containing the IMU, processor and battery.",
  },
  {
    icon: Bluetooth,
    title: "Wireless Sync",
    description:
      "Training data is securely transmitted via Bluetooth to the mobile application.",
  },
  {
    icon: BrainCircuit,
    title: "AI Processing",
    description:
      "AI algorithms transform raw motion data into meaningful performance insights.",
  },
  {
    icon: Smartphone,
    title: "Coach Dashboard",
    description:
      "Athletes and coaches instantly access reports, analytics and recommendations.",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative bg-dvl-bg py-32"
    >
      <Container>

        <SectionTitle
          badge="Our Solution"
          title="One Modular Platform. Endless Performance Insights."
          description="DVL combines smart textiles, embedded electronics and AI-powered software into one seamless athlete monitoring ecosystem."
        />

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative"
          >

            <GlassCard className="overflow-hidden p-8">

              <div className="aspect-square rounded-3xl border border-dashed border-dvl-accent/20 bg-white/[0.02] flex items-center justify-center">

                <div className="text-center">

                  <p className="text-xs uppercase tracking-[0.35em] text-dvl-accent">
                    PRODUCT RENDER
                  </p>

                  <p className="mt-5 text-dvl-text-secondary">
                    Replace with module render from PDF
                  </p>

                </div>

              </div>

            </GlassCard>

          </motion.div>

          {/* RIGHT */}

          <div className="space-y-5">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .5,
                    delay: index * .1,
                  }}
                >

                  <GlassCard className="group p-6 transition-all duration-300 hover:border-dvl-accent/40 hover:-translate-y-1">

                    <div className="flex gap-5">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-dvl-accent/10">

                        <Icon
                          size={28}
                          className="text-dvl-accent"
                        />

                      </div>

                      <div className="flex-1">

                        <div className="flex items-center justify-between">

                          <h3 className="text-xl font-semibold text-white">
                            {step.title}
                          </h3>

                          <span className="text-sm text-dvl-accent">
                            0{index + 1}
                          </span>

                        </div>

                        <p className="mt-3 leading-7 text-dvl-text-secondary">
                          {step.description}
                        </p>

                      </div>

                    </div>

                  </GlassCard>

                </motion.div>

              );

            })}

          </div>

        </div>

        {/* FLOW */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-24"
        >

          <GlassCard className="p-10">

            <div className="flex flex-wrap items-center justify-center gap-5 text-center">

              <div>
                <h4 className="font-semibold text-white">
                  Smart Textile
                </h4>
              </div>

              <span className="text-dvl-accent">→</span>

              <div>
                <h4 className="font-semibold text-white">
                  Embedded Module
                </h4>
              </div>

              <span className="text-dvl-accent">→</span>

              <div>
                <h4 className="font-semibold text-white">
                  Bluetooth
                </h4>
              </div>

              <span className="text-dvl-accent">→</span>

              <div>
                <h4 className="font-semibold text-white">
                  AI Analytics
                </h4>
              </div>

              <span className="text-dvl-accent">→</span>

              <div>
                <h4 className="font-semibold text-white">
                  Coach Dashboard
                </h4>
              </div>

            </div>

          </GlassCard>

        </motion.div>

      </Container>
    </section>
  );
}