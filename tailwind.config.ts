import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#6c0707",
        gold: "#E0A75E",
        "light-gold": "#F9D689",
        cream: "#F5E7B2",
      },
    },
  },
  plugins: [],
};
export default config;
