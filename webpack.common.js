const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
	entry: {
		Playground: path.resolve(__dirname, 'index.js')
	},
	plugins: [
		new FileManagerPlugin({
			onEnd: {
				copy: [
					{source: path.resolve(__dirname, '../../../cl/dist/playground.*'), destination: path.resolve(__dirname, 'dist') },
				]
			}
		})
	]
}
