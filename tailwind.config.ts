import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dvl: {
          bg: "#0a0e17",
          surface: "#0D1320",
          card: "#161b22",
          border: "#1f2937",
          "border-light": "#30363d",
          accent: "#f0883e",
          "accent-hover": "#e07b32",
          blue: "#58a6ff",
          green: "#3fb950",
          red: "#f85149",
          purple: "#a371f7",
          yellow: "#d29922",
          text: {
            primary: "#e6edf3",
            secondary: "#8b949e",
            muted: "#484f58",
            dim: "#6e7681",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;