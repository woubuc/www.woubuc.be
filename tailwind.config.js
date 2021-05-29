const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',

	purge: [
		'utils/**/*.ts',
		'tailwind.safelist.txt',
	],

	theme: {
		fontFamily: {
			title: `'Montserrat', sans-serif`,
			body: `'Open Sans', sans-serif`,
			mono: `'Ubuntu Mono', monospace`,
		},
		colors: {
			white: colors.white,
			black: colors.black,
			gray: colors.warmGray,

			red: colors.rose,
			orange: colors.orange,
			yellow: colors.amber,
			green: colors.emerald,
			cyan: colors.cyan,
			blue: colors.indigo,
			purple: colors.purple,
		},
		extend: {
		},
	},
};
