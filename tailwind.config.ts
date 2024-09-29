import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./molecules/**/*.{js.ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        last_white : "#FFFFFF",
        colors_slate_500 : "#64748B",
        colors_slate_600 : "#475569", 
        colors_slate_200 : "#E2E8F0",
        colors_base_white : "#fff",
        colors_slate_400 : "#94A3B8",
        colors_slate_50 : "#F8FAFC",
        colors_slate_100 : "#F1F5F9",
      },
      fontFamily : {
          inter : ['Inter', 'sans-serif'],
          jetBrains : ['JetBrains Mono', 'system-ui']
      },
      spacing : {
        '1' : '4px',
        '2' : '8px',
        '3' : '12px',
        '4' : '16px',
        '12' : '48px'
      },
      fontSize : {
        'sm' : '12px',
        'md' : '16px',
        'lg' : '20px',
        'xl' : '24px',
        'xxl' : '28px',
        '3xl' : '32px'
      }
    },
  },
  plugins: [],
};
export default config;
