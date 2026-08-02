"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  Bluetooth,
  BatteryCharging,
  Usb,
  Database,
  BrainCircuit,
} from "lucide-react";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const specs = [
  {
    icon: Cpu,
    title: "6-Axis IMU",
    text: "Accurate movement tracking",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth 5.2",
    text: "Real-time wireless sync",
  },
  {
    icon: BatteryCharging,
    title: "Rechargeable",
    text: "Long training sessions",
  },
  {
    icon: Usb,
    title: "USB-C",
    text: "Fast charging",
  },
  {
    icon: Database,
    title: "Local Storage",
    text: "Offline recording",
  },
  {
    icon: BrainCircuit,
    title: "AI Ready",
    text: "Cloud analytics platform",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative bg-[#09111C] py-32"
    >
      <Container>

        <SectionTitle
          badge="Technology"
          title="Engineered for Elite Performance"
          description="Designed around a lightweight modular architecture combining smart textiles, embedded electronics and artificial intelligence."
        />

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">

          {/* PRODUCT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative"
          >

            <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-dvl-accent/10 blur-[140px]" />

            <Image
              src="/images/technology/exploded-view.png"
              alt="Exploded View"
              width={700}
              height={700}
              className="relative z-10 w-full"
            />

          </motion.div>

          {/* SPECS */}

          <div className="grid gap-5 sm:grid-cols-2">

            {specs.map((item,index)=>{

              const Icon=item.icon;

              return(

                <motion.div
                  key={item.title}
                  initial={{opacity:0,y:20}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{
                    delay:index*.08
                  }}
                >

                  <GlassCard className="h-full p-6 transition hover:border-dvl-accent/40">

                    <Icon
                      size={28}
                      className="mb-5 text-dvl-accent"
                    />

                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-dvl-text-secondary">
                      {item.text}
                    </p>

                  </GlassCard>

                </motion.div>

              )

            })}

          </div>

        </div>

        {/* Architecture */}

        <div className="mt-28">

          <GlassCard className="p-10">

            <h3 className="mb-12 text-center text-3xl font-bold text-white">
              System Architecture
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-6">

              {[
                "IMU",
                "MCU",
                "Bluetooth",
                "Mobile App",
                "AI Engine",
                "Coach Dashboard",
              ].map((item,index)=>(
                <div
                  key={item}
                  className="flex items-center gap-6"
                >

                  <div className="rounded-xl bg-dvl-accent/10 px-6 py-4 text-white">

                    {item}

                  </div>

                  {index!==5 &&

                    <span className="text-2xl text-dvl-accent">

                      →

                    </span>

                  }

                </div>
              ))}

            </div>

          </GlassCard>

        </div>

      </Container>

    </section>
  );
}