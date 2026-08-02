import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Technology from "@/components/sections/Technology";
import Dashboard from "@/components/sections/Dashboard";
import AIAnalytics from "@/components/sections/AIAnalytics";
import Roadmap from "@/components/sections/Roadmap";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-dvl-bg text-dvl-text-primary">
      <Navbar />

      <Hero />

      <Problem />

      <Solution />

      <Technology />

      <Dashboard />

      <AIAnalytics />

      <Roadmap />

      <Contact />

      <Footer />
    </main>
  );
}