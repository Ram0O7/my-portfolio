/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "profile-img":
          "url('https://res.cloudinary.com/dn6bzdlno/image/upload/v1692613956/profile_qf2bmd.jpg')",
        "profile-img2":
          "url('https://res.cloudinary.com/dn6bzdlno/image/upload/v1692613956/profile_qf2bmd.jpg')",
      },
      colors: {
        "bg-primary": "#F5761A",
        "text-primary": "#717171",
        backdrop: "#000a",
      },
    },
  },
  plugins: [],
};
