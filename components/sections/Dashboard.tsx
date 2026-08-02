"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Gauge,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const cards = [
  {
    icon: Gauge,
    title: "Real-Time Metrics",
    text: "Monitor speed, acceleration and movement instantly.",
  },
  {
    icon: TrendingUp,
    title: "Performance Trends",
    text: "Compare every session with historical performance.",
  },
  {
    icon: Activity,
    title: "Movement Analysis",
    text: "Visualize skating efficiency and workload.",
  },
  {
    icon: BrainCircuit,
    title: "AI Insights",
    text: "Receive automated recommendations after every session.",
  },
];

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="relative bg-dvl-bg py-32"
    >
      <Container>

        <SectionTitle
          badge="Dashboard"
          title="Every Session. Every Metric. One Platform."
          description="A powerful analytics platform transforming raw movement data into actionable insights for athletes and coaches."
        />

        <div className="mt-24 grid items-center gap-16 lg:grid-cols-[1.45fr_0.55fr]">

          {/* PHONE */}

            <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-start"
            >

            <div className="absolute left-24 top-20 h-[700px] w-[700px] rounded-full bg-dvl-accent/10 blur-[180px]" />

            <Image
            src="/images/dashboard/coach-dashboard.png"
            alt="DVL Coach Dashboard"
            width={1600}
            height={1000}
            priority
            className="
                relative
                z-10
                w-full
                max-w-[980px]
                rounded-[28px]
                border
                border-white/10
                shadow-[0_40px_100px_rgba(0,0,0,.45)]
            "
            />

          </motion.div>

          {/* RIGHT */}

          <div className="space-y-6">

            {cards.map((card,index)=>{

              const Icon=card.icon;

              return(

                <motion.div
                  key={card.title}
                  initial={{opacity:0,y:20}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{
                    delay:index*.08
                  }}
                >

                  <GlassCard className="p-6 hover:border-dvl-accent/40 transition">

                    <div className="flex gap-5">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-dvl-accent/10">

                        <Icon
                          size={28}
                          className="text-dvl-accent"
                        />

                      </div>

                      <div>

                        <h3 className="text-xl font-semibold text-white">
                          {card.title}
                        </h3>

                        <p className="mt-3 leading-7 text-dvl-text-secondary">
                          {card.text}
                        </p>

                      </div>

                    </div>

                  </GlassCard>

                </motion.div>

              )

            })}

          </div>

        </div>

        {/* Metrics */}

        <div className="mt-24 grid gap-6 md:grid-cols-4">

          {[
            {
              value:"94%",
              label:"Movement Quality"
            },
            {
              value:"+18%",
              label:"Acceleration"
            },
            {
              value:"AI",
              label:"Performance Score"
            },
            {
              value:"24/7",
              label:"Cloud Analytics"
            },
          ].map((metric)=>(
            <GlassCard
              key={metric.label}
              className="p-8 text-center"
            >

              <h3 className="text-4xl font-bold text-dvl-accent">

                {metric.value}

              </h3>

              <p className="mt-4 text-dvl-text-secondary">

                {metric.label}

              </p>

            </GlassCard>
          ))}

        </div>

      </Container>

    </section>
  );
}