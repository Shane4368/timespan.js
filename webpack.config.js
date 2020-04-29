"use strict";

const MinifyPlugin = require("babel-minify-webpack-plugin");
const { version } = require("./package.json");

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		filename: `timespan.${version}.min.js`,
		path: __dirname + "/webpack",
		library: "TimeSpan",
		libraryExport: "TimeSpan"
	},
	module: {
		rules: [{
			test: /\.ts$/,
			use: "ts-loader",
			exclude: /node_modules/
		}]
	},
	resolve: { extensions: ["ts"] },
	plugins: [
		new MinifyPlugin({ undefinedToVoid: false }, { include: "./src/index.ts" })
	]
};