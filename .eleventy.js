module.exports = function (eleventyConfig) {
  // Explicitly copy static assets to output folder
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // BrowserSync configuration
  eleventyConfig.setBrowserSyncConfig({
    files: './public/css/**/*.css',
    files: './public/js/**/*.js',
    ui: false,
    ghostMode: false
  });

  // Set a FIXED path prefix for your repository
  // Replace 'nellekestrik' with your actual repository name
  return {
    pathPrefix: "/nellekestrik/",
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
