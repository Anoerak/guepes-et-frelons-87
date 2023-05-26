const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@Components': path.resolve(__dirname, 'src/components'),
			'@Pages': path.resolve(__dirname, 'src/pages'),
			'@Utils': path.resolve(__dirname, 'src/utils'),
			'@Assets': path.resolve(__dirname, 'src/utils/assets'),
			'@Data': path.resolve(__dirname, 'src/utils/assets/data'),
			'@Images': path.resolve(__dirname, 'src/utils/assets/images'),
			'@Styles': path.resolve(__dirname, 'src/utils/styles'),
			'@Hooks': path.resolve(__dirname, 'src/utils/hooks'),
			'@App': path.resolve(__dirname, 'src/app'),
			'@Features': path.resolve(__dirname, 'src/features'),
		},
	},
};
