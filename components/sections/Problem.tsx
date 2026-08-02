"use client";

import {
  Activity,
  Cpu,
  DollarSign,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

import { fadeInUp, staggerContainer } from "@/lib/animations";

const problems = [
  {
    icon: DollarSign,
    title: "High Cost",
    description:
      "Existing athlete monitoring platforms require expensive hardware and recurring software subscriptions.",
  },
  {
    icon: Cpu,
    title: "Complex Hardware",
    description:
      "Many solutions rely on multiple external devices and lengthy setup procedures before every session.",
  },
  {
    icon: LineChart,
    title: "Difficult Analysis",
    description:
      "Raw performance data often lacks clear insights that coaches can immediately use.",
  },
  {
    icon: Activity,
    title: "Limited Accessibility",
    description:
      "Advanced monitoring technologies are typically available only to elite organizations.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative bg-[#0D1320] py-32"
    >
      <Container>

        <SectionTitle
          badge="The Challenge"
          title="Current Athlete Monitoring Isn't Built for Everyone."
          description="Today's performance monitoring systems are powerful, but often expensive, difficult to deploy and inaccessible for many teams."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                custom={index * 0.12}
              >
                <GlassCard className="group h-full p-8 transition-all duration-300 hover:-translate-y-2 hover:border-dvl-accent/40">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-dvl-accent/10">

                    <Icon
                      size={28}
                      className="text-dvl-accent"
                    />

                  </div>

                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-dvl-text-secondary">
                    {item.description}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Comparison */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >

          <GlassCard className="overflow-hidden">

            <div className="grid lg:grid-cols-2">

              {/* Existing */}

              <div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r">

                <h3 className="text-2xl font-bold text-white">
                  Existing Solutions
                </h3>

                <ul className="mt-8 space-y-5">

                  <li className="flex items-center gap-3 text-dvl-text-secondary">
                    ❌ Expensive hardware ecosystem
                  </li>

                  <li className="flex items-center gap-3 text-dvl-text-secondary">
                    ❌ Long installation process
                  </li>

                  <li className="flex items-center gap-3 text-dvl-text-secondary">
                    ❌ Complex software interfaces
                  </li>

                  <li className="flex items-center gap-3 text-dvl-text-secondary">
                    ❌ Limited accessibility
                  </li>

                </ul>

              </div>

              {/* DVL */}

              <div className="bg-dvl-accent/5 p-10">

                <h3 className="text-2xl font-bold text-dvl-accent">
                  DVL Approach
                </h3>

                <ul className="mt-8 space-y-5">

                  <li className="flex items-center gap-3 text-white">
                    ✅ Modular smart textile platform
                  </li>

                  <li className="flex items-center gap-3 text-white">
                    ✅ Lightweight removable module
                  </li>

                  <li className="flex items-center gap-3 text-white">
                    ✅ AI-powered performance insights
                  </li>

                  <li className="flex items-center gap-3 text-white">
                    ✅ Designed for scalable adoption
                  </li>

                </ul>

              </div>

            </div>

          </GlassCard>

        </motion.div>

      </Container>
    </section>
  );
}