const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "src")
    },
    extensions: [".ts", ".js", ".vue"],
    modules: ["node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "RX Test",
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new VueLoaderPlugin()
  ]
};
