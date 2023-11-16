module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("uploads");

  return {
    passthroughFileCopy: true
  };
};