const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sveltePreprocess = require("svelte-preprocess");

const nodeEnvironment = process.env.NODE_ENV || "development";
const isProd = nodeEnvironment === "production";
const distFolder = path.resolve(__dirname, "dist");

module.exports = {
    mode: nodeEnvironment,
    entry: {
        bundle: ["./src/main.ts"],
    },
    resolve: {
        alias: {
            svelte: path.resolve("node_modules", "svelte"),
            src: path.resolve(__dirname, "src"),
        },
        extensions: [".mjs", ".ts", ".js", ".svelte", ".html"],
        mainFields: ["svelte", "browser", "module", "main"],
    },
    output: {
        path: distFolder,
        filename: isProd ? "[name].[fullhash].js" : "[name].js",
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
                        compilerOptions: {
                            // NOTE Svelte's dev mode MUST be enabled for HMR to work
                            dev: !isProd, // Default: false
                        },
                        emitCss: isProd,
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
                    isProd ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                // Images
                test: /\.(gif|png|jpe?g)$/,
                exclude: /node_modules/,
                include: /src/,
                use: {
                    loader: "file-loader",
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isProd ? "css/[contenthash].css" : "css/[name].css",
            chunkFilename: isProd
                ? "css/[contenthash].css"
                : "css/bundle.[name].css",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "New Svelte App",
            favicon: "src/favicon.png",
        }),
    ],
    devtool: isProd ? "eval" : "eval-cheap-module-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
    },
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
