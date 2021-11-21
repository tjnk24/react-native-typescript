const path = require('path');

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: {
      sourceExts,
      assetExts
    }
  } = await getDefaultConfig(__dirname);

  return {
    projectRoot: path.resolve(__dirname, 'static/client'),
    resetCache: true,
    watchFolders: [
      'node_modules',
    ],
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        }
      }),
    },
    resolver: {
      nodeModulesPaths: 'node_modules',
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg']
    }
  };
})();
