"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

const roadmap = [
  {
    year: "2025",
    title: "Concept & Research",
    description:
      "Research, product validation and initial hardware design.",
  },
  {
    year: "2026",
    title: "Prototype Development",
    description:
      "Build and test the first working smart textile prototype.",
  },
  {
    year: "2027",
    title: "Pilot Programs",
    description:
      "Collaborate with ice hockey clubs and collect real-world data.",
  },
  {
    year: "2028",
    title: "Commercial Launch",
    description:
      "Launch the platform and expand into the Finnish market.",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="bg-dvl-bg py-32"
    >
      <Container>

        <SectionTitle
          badge="Roadmap"
          title="Building the Future of Sports Analytics"
          description="Our journey from concept to commercial deployment."
        />

        <div className="mt-20 relative">

          {/* Timeline */}

          <div className="absolute left-6 top-0 h-full w-1 bg-dvl-accent/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">

            {roadmap.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                <div className="hidden md:block md:w-1/2" />

                {/* Circle */}

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-dvl-accent text-black font-bold">
                  {index + 1}
                </div>

                {/* Card */}

                <div className="flex-1 md:w-1/2">
                  <GlassCard className="p-6">

                    <span className="text-dvl-accent font-semibold">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-dvl-text-secondary">
                      {item.description}
                    </p>

                  </GlassCard>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}