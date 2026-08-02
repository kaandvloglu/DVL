"use client";

import { Mail, MapPin, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import PrimaryButton from "@/components/ui/PrimaryButton";
import GlassCard from "@/components/ui/GlassCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#0D1320] py-32"
    >
      <Container>
        <SectionTitle
          badge="Contact"
          title="Let&apos;s Build the Future of Sports Technology"
          description="Interested in DVL? We&apos;d love to hear from athletes, clubs, investors and partners."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Left */}

          <GlassCard className="p-8">
            <h3 className="text-3xl font-bold text-white">
              Ready to work together?
            </h3>

            <p className="mt-6 leading-8 text-dvl-text-secondary">
              Whether you&apos;re an investor, sports club or technology
              partner, we&apos;re always open to discussing new opportunities.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-dvl-accent" />

                <span className="text-white">
                  hello@dvl.fi
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-dvl-accent" />

                <span className="text-white">
                  Finland
                </span>
              </div>
            </div>

            <div className="mt-10">
              <PrimaryButton href="mailto:hello@dvl.fi">
                Contact Us
                <ArrowRight size={18} />
              </PrimaryButton>
            </div>
          </GlassCard>

          {/* Right */}

          <GlassCard className="flex items-center justify-center p-10">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white">
                Partnership Opportunities
              </h3>

              <p className="mt-5 leading-8 text-dvl-text-secondary">
                We are currently looking for pilot teams, strategic partners
                and early adopters interested in shaping the future of athlete
                monitoring.
              </p>
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}