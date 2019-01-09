const path = require('path')

const config = {
  target:'node', //webpack的配置项,打包出来的代码在哪个环境中执行
	entry:{
		app:path.join(__dirname,'../src/server.entry.js')  //打包入口文件，从入口文件找到所有需要的dependencices.
	},
	output:{
		filename:'server.entry.js',  //打包文件的名字
		path:path.join(__dirname,'../dist'), //打包后文件存储的位置
    publicPath:'',  //插入文件时候,使用的解析路径
    libraryTarget:'commonjs2'  //打包出这个JS 使用的配置方法 我们使用commonjs2的规范
	},
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/, 
				use:"babel-loader",  //如果需要解析babel的语法,需要babel-loader这个插件.但是babel-loader只是一个插件.你还需要安装babel-core babel-preset-env babel-preset-react 
				exclude:/node_modules/ 
      },
      {
				test: /\.(css|less)$/,
				use: ["style-loader", "css-loader","less-loader"]
		  }
		]
  },
  resolve: {
		extensions: [".js", ".jsx"]
	},
} 

module.exports = config