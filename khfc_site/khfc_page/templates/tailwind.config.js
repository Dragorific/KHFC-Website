// tailwind.config.js

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          colors: {
              slate: {
                  '50': '#f7fafc',
                  // other shades...
                  '950': '#1f2d3d',
              },
          },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'), // Optional: Include if you want Tailwind forms
      require('@tailwindcss/typography'), // Optional: Include if you want Tailwind typography
      require('@tailwindcss/aspect-ratio'), // Optional: Include if you want Tailwind aspect ratio utilities
      require('@tailwindcss/line-clamp'), // Optional: Include if you want Tailwind line clamp utilities
      require('@tailwindcss/transition'), // Include Tailwind CSS transition utilities
  ],
};