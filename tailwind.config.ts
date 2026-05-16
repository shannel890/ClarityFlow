import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edf5ff",
          100: "#d9eaff",
          500: "#2563eb",
          600: "#1d4ed8",
        },
        ink: {
          700: "#334155",
          800: "#1e293b",
        },
        surface: {
          50: "#f8fafc",
          100: "#f1f5f9",
        },
      },
      borderRadius: {
        card: "1.125rem",
      },
      boxShadow: {
        card: "0 10px 30px rgba(15, 23, 42, 0.08)",
        soft: "0 20px 50px rgba(37, 99, 235, 0.12)",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
};

export default config;
