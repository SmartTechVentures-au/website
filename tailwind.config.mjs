/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        // Smart Tech / Axurcio design system
        ink: "#061412", // near-black panels, footer, logo mark
        lime: "#B9FF66", // legacy accent alias (kept for compatibility)
        accent: {
          50: "#f4ffe6",
          100: "#e6ffc2",
          200: "#d6ff99",
          300: "#c8ff80",
          400: "#b9ff66", // brand accent (lime)
          500: "#9fe84a",
          600: "#7fc62f",
          700: "#5f9722",
          800: "#3f6417",
          900: "#26400e",
        },
        brand: {
          50: "#edf9ff",
          100: "#d6f1ff",
          200: "#b4e6ff",
          300: "#82d5ff",
          400: "#49b6ff", // brand blue
          500: "#1f96f5",
          600: "#0f78e0",
          700: "#1060b4",
          800: "#13508f",
          900: "#154470",
        },
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        // legacy alias still referenced by older components
        SpaceGrotesk: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -34px rgba(3, 17, 25, 0.45)",
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "pulse-line": "pulseLine 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
