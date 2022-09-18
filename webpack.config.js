// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;


const config = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
        compress: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

        new MiniCssExtractPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: "[name]-[contenthash].css"
        // })

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                loader: "css-loader",
                options: {
                    mode: "local",
                    auto: true,
                    exportGlobals: true,
                    localIdentName: "[path][name]__[local]--[hash:base64:5]",
                    localIdentContext: path.resolve(__dirname, "src"),
                    localIdentHashSalt: "my-custom-hash",
                    namedExport: true,
                    exportLocalsConvention: "camelCase",
                    exportOnlyLocals: false,
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        }
                    },
                    // Compiles Sass to CSS
                    'sass-loader'
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.sass', '...'],
        alias: {
            'handlebars': 'handlebars/dist/handlebars.js'
        }
    },
};

module.exports = () => {

    if (isProduction) {
        config.mode = 'production';

    } else {
        config.mode = 'development';
    }
    return config;
};

