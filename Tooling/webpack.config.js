const path = require("path")

module.exports = {
    entry: "./src/teste1.js",
    output: {
        path: path.resolve(__dirname, "dist", "js"),
        filename: "teste1.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}