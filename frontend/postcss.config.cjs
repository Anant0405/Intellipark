const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const cssnano = require('cssnano');

module.exports = {
    plugins: [
        postcssImport(),
        autoprefixer(),
        postcssNested(),
        cssnano({
            preset: 'default',
        }),
    ],
};