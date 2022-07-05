
const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, "./js/terminal.ts"),
	output: {
		filename:"bundle.js",
		path: path.resolve(__dirname, './dist/'),
	},

	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
	},

	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "ts-loader" },
			{ test: /\.ts?$/, loader: "ts-loader"},
		],
	},
};
