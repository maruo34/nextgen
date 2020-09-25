const path = require("path")

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/build/"
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@core": path.resolve(__dirname, "src/core")
    }
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    writeToDisk: true,
    contentBase: path.join(__dirname, "public"),
    port: 8080,
    hot: true
  }
}
