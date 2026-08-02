import Container from "@/components/ui/Container";

const links = [
  {
    title: "Technology",
    href: "#technology",
  },
  {
    title: "Dashboard",
    href: "#dashboard",
  },
  {
    title: "Roadmap",
    href: "#roadmap",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dvl-bg">

      <Container>

        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">

          <div>

            <h2 className="text-2xl font-bold text-white">

              DVL

            </h2>

            <p className="mt-2 text-sm text-dvl-text-secondary">

              Smart Textile Performance Platform

            </p>

          </div>

          <nav className="flex flex-wrap gap-8">

            {links.map((link) => (

              <a
                key={link.title}
                href={link.href}
                className="text-dvl-text-secondary transition hover:text-dvl-accent"
              >
                {link.title}
              </a>

            ))}

          </nav>

        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-dvl-text-secondary">

          © {new Date().getFullYear()} DVL Smart Textile. All rights reserved.

        </div>

      </Container>

    </footer>
  );
}