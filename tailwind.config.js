/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {},
  },
    plugins: [
        require('flowbite/plugin') // add the flowbite plugin
    ]
}
