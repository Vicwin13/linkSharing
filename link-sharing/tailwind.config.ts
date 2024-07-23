import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Instrument_Sans: ["Instrument Sans", "sans-serif"],
      },
      colors: {
        deep_blue: "#633CFF",
        deep_ash: "#737373",
        deep_red: "#FF3939",
        norm_purp: "#BEADFF",
        light_purp: "#d9d9d9",
        norm_ash: "#efebff",
        light_ash: "#FAFAFA",
        dark: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
