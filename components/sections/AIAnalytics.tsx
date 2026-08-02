"use client";

import {
  Activity,
  Bluetooth,
  BrainCircuit,
  Cpu,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const flow = [
  {
    icon: Activity,
    title: "Motion Data",
    description:
      "The smart textile continuously captures movement and performance data during training.",
  },
  {
    icon: Bluetooth,
    title: "Wireless Transfer",
    description:
      "Data is securely transmitted to the mobile application via Bluetooth.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    description:
      "The app synchronizes, stores and prepares the collected data for analysis.",
  },
  {
    icon: BrainCircuit,
    title: "AI Processing",
    description:
      "Artificial intelligence transforms raw sensor data into meaningful performance insights.",
  },
  {
    icon: Cpu,
    title: "Coach Dashboard",
    description:
      "Coaches receive visual reports and recommendations to support better decisions.",
  },
];

export default function AIAnalytics() {
  return (
    <section
      id="analytics"
      className="bg-[#0D1320] py-32"
    >
      <Container>

        <SectionTitle
          badge="AI Analytics"
          title="From Motion Data to Intelligent Decisions"
          description="DVL transforms raw sensor measurements into meaningful insights that help athletes improve performance and assist coaches in making data-driven decisions."
        />

        <div className="mt-20 space-y-6">

          {flow.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >

                <GlassCard className="p-6">

                  <div className="flex flex-col gap-6 md:flex-row md:items-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-dvl-accent/10">

                      <Icon
                        size={30}
                        className="text-dvl-accent"
                      />

                    </div>

                    <div className="flex-1">

                      <div className="flex items-center justify-between">

                        <h3 className="text-2xl font-semibold text-white">
                          {step.title}
                        </h3>

                        <span className="rounded-full bg-dvl-accent/10 px-3 py-1 text-sm text-dvl-accent">
                          0{index + 1}
                        </span>

                      </div>

                      <p className="mt-3 leading-7 text-dvl-text-secondary">
                        {step.description}
                      </p>

                    </div>

                  </div>

                </GlassCard>

                {index !== flow.length - 1 && (
                  <div className="my-3 flex justify-center text-2xl text-dvl-accent">
                    ↓
                  </div>
                )}

              </motion.div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}