const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: "./src/assets/scripts/main.js",
	output: {
		filename: 'bundle.js', //ビルドした後のファイル名
		path: path.resolve( __dirname, 'public' ) //ビルドしたファイルを吐き出す場所
 	},
	devServer: {
		contentBase: './public/',
		open: true,
		watchContentBase: true,
	},
	resolve: {
		// import './foo.vue' の代わりに import './foo' と書けるようになる(拡張子省略)
		extensions: ['.js', '.vue'],
	},
	plugins: [
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader'
					}
				]
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env'
							]
						}
					}
				],
				exclude: /node_modules/,
			},
			{
				test: /\.scss/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						}
					}
				],
			}
		]
	}
};
