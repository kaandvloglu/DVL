"use client";

import Image from "next/image";
import {
  Cpu,
  Bluetooth,
  Activity,
  ShieldCheck,
  Database,
  Brain,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

const technologies = [
  {
    icon: ShieldCheck,
    title: "Protective Structure",
    text: "Designed to integrate seamlessly behind the athlete's chest protection.",
  },
  {
    icon: Cpu,
    title: "Embedded Electronics",
    text: "Compact hardware platform with sensors and onboard processing.",
  },
  {
    icon: Bluetooth,
    title: "BLE Connectivity",
    text: "Real-time wireless communication with mobile and cloud platforms.",
  },
  {
    icon: Activity,
    title: "Motion Sensors",
    text: "High-frequency IMU measurements for accurate player tracking.",
  },
  {
    icon: Database,
    title: "Data Storage",
    text: "Secure local memory with synchronized cloud reporting.",
  },
  {
    icon: Brain,
    title: "AI Ready",
    text: "Machine learning pipeline transforms raw measurements into actionable insights.",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="bg-[#0B1220] py-32"
    >
      <Container>

        <SectionTitle
          badge="Technology"
          title="Engineered for Elite Performance"
          description="The DVL platform combines smart textiles, embedded electronics and artificial intelligence into a lightweight wearable system built for professional ice hockey."
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}

          <div className="relative">

            <div className="absolute inset-0 rounded-[40px] bg-dvl-accent/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111827] p-8">

              <Image
                src="/images/technology/exploded-view.png"
                alt="DVL Exploded View"
                width={1200}
                height={1200}
                className="w-full object-contain"
                priority
              />

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid gap-5">

            {technologies.map((item, index) => {
              const Icon = item.icon;

              return (
                <GlassCard
                  key={index}
                  className="flex items-start gap-5 p-6 transition duration-300 hover:border-dvl-accent/40"
                >
                  <div className="rounded-xl bg-dvl-accent/10 p-3">

                    <Icon
                      size={26}
                      className="text-dvl-accent"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-dvl-text-secondary">
                      {item.text}
                    </p>

                  </div>

                </GlassCard>
              );
            })}

          </div>

        </div>

      </Container>
    </section>
  );
}