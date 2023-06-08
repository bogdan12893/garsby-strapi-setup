/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},

    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        md: "1.5rem",
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1024px",
        "2xl": "1100px",
      },
    },
  },

  plugins: [],
};
