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
        primary: {
          DEFAULT: '#22c55e',
          light: '#9be9b1',
        },
        dark: {
          DEFAULT: '#000000',
          800: '#0a0a0a',
          700: '#141414',
          600: '#1a1a1a',
        }
      },
    },
  },
  plugins: [],
};
export default config;
