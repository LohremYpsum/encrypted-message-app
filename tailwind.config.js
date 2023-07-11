/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');


module.exports = {
	purge: [],
  content: [
    "./node_modules/flowbite/**/*.js"
],
	theme: {
		colors: { },
		variants: {},
		plugins: [
      require('flowbite/plugin')
  ]
	}
}

