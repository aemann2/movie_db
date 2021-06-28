module.exports = {
	purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				background: '#181A1D',
				lightBackground: '#6B6B6B',
				mainText: '#D5D5D5',
				headingText: '#FFF5F4',
				attention: '#AA3C33',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
