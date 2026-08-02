import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-dvl-accent/30 bg-dvl-accent/10 px-4 py-2 text-sm font-medium text-dvl-accent">
      {children}
    </span>
  );
}