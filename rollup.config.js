import css from 'rollup-plugin-css-only';

export default {
    input: "src/main.js",
    output: [{
        file: "build/bundle.js",
        format: 'cjs',
        inlineDynamicImports: true
    }, {
        file: "build/bundle-es.js",
        format: 'iife',
        inlineDynamicImports: true
    }],
    plugins: [css({ output: 'bundle.css' })]
}