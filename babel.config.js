// module.exports = {
//   presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
// };

module.exports = api => {
  const isTest = api.env('test');
  console.log("isTest", isTest)
  if (isTest) {
    return {
      presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    };
  } else {
    // build cofnig
    return {
      "presets": [
        [
          "@babel/env",
          {
            "modules": false
          }
        ]
      ],
      "plugins": [
        [
          "@babel/plugin-transform-runtime",
          {
            "corejs": { "version": 3, "proposals": true },
            "useESModules": true
          }
        ]
      ]
    }
  }
};