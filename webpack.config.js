const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

// homeUrl = './';
homeUrl = './react-pwa/dist/';

module.exports = {
    entry: "./src/index.js",
    output: {path: path.join(__dirname, "/dist"), filename: "index_bundle.js"},
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: {loader: "babel-loader" } },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(jpe?g|png|gif|svg)$/i, use: [ { loader: 'file-loader' } ] }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({ "process.env.PUBLIC_URL": "/public\/"}),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new CopyWebpackPlugin ({
            patterns: [
                {from: "./public/img/logo192.png", to: "./img/logo192.png"},
                {from: "./public/img/logo512.png", to: "./img/log512.png"},
                {from: "./public/img/favicon.ico", to: "./img/favicon.ico"},
                {from: "./public/manifest.json", to: "./manifest.json"},
                {from: "./public/serviceWorker.js", to: "./serviceWorker.js"},
                {from: "./public/offline.html", to: "./offline.html"},
                {from: "./public/notfound.html", to: "./notfound.html"},
                {from: "./public/pspdfkit-lib", to: "./pspdfkit-lib"},
                {from: "./public/example.pdf", to: "./example.pdf"},
                {from: "./public/example2.pdf", to: "./example2.pdf"},
                {from: "./public/my-pspdfkit.css", to: "./my-pspdfkit.css"},
                {from: "./public/my-pspdfkit2.css", to: "./my-pspdfkit2.css"},
                {from: "./public/icons", to: "./icons"}
            ]
        })
    ],
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 3000
    },
};
