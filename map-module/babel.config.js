module.exports = function (api) {
    api.cache(true);
  
    const presets = [ ["@babel/preset-flow"], ["react-app"] ];
    const plugins = [ "babel-plugin-rewire" ];
  
    return {
      presets,
      plugins
    };
}y