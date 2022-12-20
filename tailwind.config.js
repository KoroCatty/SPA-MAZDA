/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
module.exports = {
	jit: true,
	// @see https://tailwindcss.com/docs/upcoming-changes
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	content: [
		'./src/javascripts/**/*.{js,jsx,ts,tsx,vue}',
		'./src/templates/*.html'],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'autoprefixer' ),
    'postcss-preset-env( stage: 3 )',
    'postcss-flexbugs-fixes()',
		'cssnano: {}',
			// cssnano: ctx.env === "production" ? {} : false, (production時minifyを作動しない)

	]
}