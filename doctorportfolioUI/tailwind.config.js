/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          blackPurva: "#00000", // Custom color
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  