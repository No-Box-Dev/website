module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("main.js");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["njk"],
    htmlTemplateEngine: false,
  };
};
