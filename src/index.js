const {
  assetLoaderPlugin,
  babelPlugin,
  esmCustomMainFieldResolverPlugin,
} = require('./plugins');
const { createEsbuildCommands } = require('./commands');

const commands = createEsbuildCommands();

module.exports = {
  commands,
  createEsbuildCommands,
  assetLoaderPlugin,
  babelPlugin,
  esmCustomMainFieldResolverPlugin,
};
