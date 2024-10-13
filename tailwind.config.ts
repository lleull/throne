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
        background: "var(--background)",
        foreground: "var(--foreground)",

        custom: {
          border: "#181818",
          light: '#080606',
          DEFAULT: '#1fb6ff', // Default color (e.g., 'bg-customBlue')
          dark: '#009eeb',
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide') // Add this line
  ],
};
export default config;
