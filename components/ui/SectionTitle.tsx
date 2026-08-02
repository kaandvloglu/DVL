import Badge from "./Badge";

interface SectionTitleProps {
  badge: string;
  title: string;
  description: string;
  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  description,
  center = true,
}: SectionTitleProps) {
  return (
    <div
      className={
        center
          ? "mx-auto max-w-3xl text-center"
          : ""
      }
    >
      <Badge>{badge}</Badge>

      <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-dvl-text-secondary">
        {description}
      </p>
    </div>
  );
}