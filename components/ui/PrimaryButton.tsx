import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function PrimaryButton({
  href,
  children,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-dvl-accent px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dvl-accent/30"
    >
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}