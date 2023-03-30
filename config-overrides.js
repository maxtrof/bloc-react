const {override, addBabelPlugin, addDecoratorsLegacy} = require('customize-cra')
module.exports = override(
    addDecoratorsLegacy(),
    addBabelPlugin("babel-plugin-transform-typescript-metadata", "babel-plugin-parameter-decorator")
);