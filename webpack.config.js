module.exports.getConfig = function(type) {

  var isDev = type === 'development';

  var config = {
    entry: './app/server.js',
    output: {
      path: __dirname,
      filename: 'server.js'
    },
    debug : isDev,
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
  };

  if(isDev){
    config.devtool = 'eval';
  }

  return config;
}