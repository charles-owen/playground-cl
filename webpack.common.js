const path = require('path');

module.exports = {
	entry: {
    Playground: {
      import: path.resolve(__dirname, 'index.js'),
      dependOn: ['Course', 'Users', 'Site']
    }
	}
}
