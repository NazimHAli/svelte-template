const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sveltePreprocess = require("svelte-preprocess");
const WebpackShellPlugin = require("webpack-shell-plugin");

const nodeEnvironment = process.env.NODE_ENV || "development";
const isProd = nodeEnvironment === "production";
const distFolder = path.resolve(__dirname, "public/dist");

module.exports = {
  mode: nodeEnvironment,
  entry: {
    bundle: ["./src/main.ts"],
  },
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".mjs", ".ts", ".js", ".svelte", ".html"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: distFolder,
    filename: isProd ? "[name].[hash].js" : "[name].js",
    chunkFilename: isProd ? "[name].[chunkhash].js" : "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        // Svelte
        test: /\.svelte$/,
        exclude: [/node_modules/],
        include: /src/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: !isProd,
            preprocess: sveltePreprocess({
              scss: true,
              postcss: true,
              typescript: {
                transpileOnly: false,
              },
            }),
          },
        },
      },
      {
        // Typescript
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        include: /src/,
      },
      {
        // Styles
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        // Images
        test: /\.(gif|png|jpe?g)$/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildStart: ["node imageutils.js"],
      dev: true,
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? "css/[contenthash].css" : "css/[name].css",
      chunkFilename: isProd ? "css/[contenthash].css" : "css/bundle.[name].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "New Svelte App",
      favicon: "src/favicon.png",
    }),
  ],
  devtool: isProd ? "false" : "inline-source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
      automaticNameDelimiter: "-",
    },
  },
  stats: {
    // Custom output
    all: false,
    errors: true,
    warnings: true,
    assets: true,
    builtAt: true,
    assetsSort: "!size",
    performance: true,
  },
};
