/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        nun: ['"Nunito"', "sans-serif"],
        sour: ['"Sour Gummy"', "sans-serif"],
        rale: ['"Raleway"', "sans-serif"],
      },
    },
  },
  plugins: [require('daisyui')],
} satisfies Config;
