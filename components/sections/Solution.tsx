"use client";

import Image from "next/image";
import { ShieldCheck, Cpu, Activity } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

export default function Solution() {
  return (
    <section
      id="solution"
      className="bg-[#0D1320] py-32"
    >
      <Container>

        <SectionTitle
          badge="Solution"
          title="Smart Module Placement"
          description="The DVL module is strategically positioned behind the chest protection panel, ensuring accurate performance monitoring without compromising athlete comfort or safety."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="space-y-6">

              <GlassCard className="flex items-start gap-5 p-6">

                <ShieldCheck
                  className="mt-1 text-dvl-accent"
                  size={32}
                />

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    Protected Position
                  </h3>

                  <p className="mt-2 leading-7 text-dvl-text-secondary">
                    The performance module is placed behind the chest
                    protection panel, minimizing impact while remaining
                    fully operational during play.
                  </p>

                </div>

              </GlassCard>

              <GlassCard className="flex items-start gap-5 p-6">

                <Cpu
                  className="mt-1 text-dvl-accent"
                  size={32}
                />

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    Integrated Electronics
                  </h3>

                  <p className="mt-2 leading-7 text-dvl-text-secondary">
                    Smart sensors, BLE communication and embedded
                    electronics work seamlessly inside the wearable
                    platform.
                  </p>

                </div>

              </GlassCard>

              <GlassCard className="flex items-start gap-5 p-6">

                <Activity
                  className="mt-1 text-dvl-accent"
                  size={32}
                />

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    Accurate Performance Data
                  </h3>

                  <p className="mt-2 leading-7 text-dvl-text-secondary">
                    The body-centered placement improves motion,
                    impact and physiological data collection for
                    reliable AI analysis.
                  </p>

                </div>

              </GlassCard>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <Image
              src="/images/solution/module-placement.png"
              alt="DVL Module Placement"
              width={900}
              height={900}
              className="w-full rounded-3xl border border-white/10 shadow-2xl"
            />

          </div>

        </div>

      </Container>
    </section>
  );
}