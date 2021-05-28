module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
            autoprefixer: false,
            stage: 1
        },
        'rucksack-css': {},
        autoprefixer: {},
        'postcss-extend-rule': {
            name: 'extend'
        },
        cssnano: {
            preset: 'default'
        }
    }
}