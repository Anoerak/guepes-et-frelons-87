const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@App': path.resolve(__dirname, 'src/app'),
			'@Components': path.resolve(__dirname, 'src/components'),
			'@Features': path.resolve(__dirname, 'src/features'),
			'@Models': path.resolve(__dirname, 'src/models'),
			'@Pages': path.resolve(__dirname, 'src/pages'),
			'@Utils': path.resolve(__dirname, 'src/utils'),
			'@Assets': path.resolve(__dirname, 'src/utils/assets'),
			'@Data': path.resolve(__dirname, 'src/utils/assets/data'),
			'@Images': path.resolve(__dirname, 'src/utils/assets/images'),
			'@Hooks': path.resolve(__dirname, 'src/utils/hooks'),
			'@Styles': path.resolve(__dirname, 'src/utils/styles'),
		},
	},
};
