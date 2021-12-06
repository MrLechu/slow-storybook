const path = require('path')

module.exports = {
    stories: [
        '../assets/ts/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@whitespace/storybook-addon-html',
    ],
    webpackFinal: (config) => {
        config.module.rules.push({
            test: /\.scss$/,

            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'resolve-url-loader',
                },
                {
                    loader: 'sass-loader',
                },
            ],
            include: path.resolve(__dirname, '../'),
        })

        // Return the altered config
        return config
    },
}
