const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			'xs': '475px',
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				mont: [ 'Montserrat', 'sans-serif' ],
				bitter: [ 'Bitter', 'serif' ],
			},	
			colors: {
				background: '#181A1D',
				lightBackground: '#6B6B6B',
				mainText: '#D5D5D5',
				headingText: '#FFF5F4',
				attention: '#AA3C33',
				lightAttention: '#FB8F86'
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
