/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "profile-img": "url('/src/assets/profile/profile.jpg')",
        "profile-img2": "url('/src/assets/profile/profile-2.jpg')",
      },
      colors: {
        "bg-primary": "#F5761A",
        "text-primary": "#717171",
      },
    },
  },
  plugins: [],
};
