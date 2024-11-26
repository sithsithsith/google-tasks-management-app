import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        bar: {
          "0%": { transform: "scaleY(0.2)", opacity: "0.6" },
          "50%": { transform: "scaleY(0.5)", opacity: "0.8" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      animation: {
        bar: "bar 1.2s infinite ease-in-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".animation-delay-100": { animationDelay: "0.2s" },
        ".animation-delay-200": { animationDelay: "0.4s" },
        ".animation-delay-300": { animationDelay: "0.6s" },
        ".animation-delay-400": { animationDelay: "0.8s" },
      });
    }),
  ],
} satisfies Config;
