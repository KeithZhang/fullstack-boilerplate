module.exports = function(api) {
  api.cache(false);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    [
      'import',
      {
        libraryName: 'antd',
        style: true,
        libraryDirectory: 'es'
      }
    ]
  ];
  return {
    presets,
    plugins
  };
};
