module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      'moduleName': 'react-native-dotenv'
    }],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
      },
    ]
  ]
};
