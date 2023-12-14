module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("uploads");

  eleventyConfig.addCollection("platforms", function(collectionApi) {
    return collectionApi.getFilteredByGlob("**/collections/platforms/*");
  });

  eleventyConfig.addFilter("test", function(m,b,c,d){console.log(m,b,c,d)});

  return {
    passthroughFileCopy: true
  };
};