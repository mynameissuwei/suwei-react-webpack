const path = require('path')  //用这个模块处理路径的问题 path.join()这个函数可以把所有的路径变成绝对路径,同时处理在不同操纵系统上路径不相同的问题。
const HtmlWebpackPlugin = require("html-webpack-plugin"); //用这个模块生成一个html的页面，同时把打包的文件都注入到这个html的页面
const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template:path.join(__dirname,'../public/index.html'),
})

const isDev = process.env.NODE_ENV === 'development'

const config = {
	entry:{
		app:path.join(__dirname,'../src/app.js')  //打包入口文件，从入口文件找到所有需要的dependencices.
	},
	output:{
		filename:'[name].[hash].js',  //打包文件的名字
		path:path.join(__dirname,'../dist'), //打包后文件存储的位置
		publicPath:''  //插入文件时候,使用的解析路径
	},
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/, 
				use:["babel-loader"],  //如果需要解析babel的语法,需要babel-loader这个插件.但是babel-loader只是一个插件.你还需要安装babel-core babel-preset-env babel-preset-react 
				exclude:/node_modules/ 
			},
			{
				test: /\.(css|less)$/,
				use: ["style-loader", "css-loader","less-loader"]
		  }
		]
	},
	plugins:[
		htmlWebpackPlugin,
	],
	resolve: {
		extensions: [".js", ".jsx"]
	},
}



module.exports = config