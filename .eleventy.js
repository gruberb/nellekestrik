module.exports = function(eleventyConfig) {
  // Copy static assets to the output folder
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Watch for changes in CSS and JS files
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/js/");

  // BrowserSync configuration
  eleventyConfig.setBrowserSyncConfig({
    ui: false,
    ghostMode: false
  });

  return {
    dir: {
      input: "src",           // Source directory
      output: "public",       // Output directory
      includes: "_includes",  // Includes directory
      data: "_data"           // Data directory
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
