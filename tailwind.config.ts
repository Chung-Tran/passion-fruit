import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{ts,tsx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
      },
      keyframes: {
        // Custom animation keyframes
      },
      animation: {
        // Custom animations
      },
      container: {
        padding: {
          DEFAULT: '2rem', // Mặc định vẫn là 2rem
          sm: '10px', // Ở màn hình nhỏ (mobile) sẽ là 10px
        },
      },
    },
  },
  plugins: [heroui()]
} satisfies Config;
