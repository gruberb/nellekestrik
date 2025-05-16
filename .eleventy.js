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

  // Configure pathPrefix for GitHub Pages
  const pathPrefix = process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
    : '/';

  return {
    pathPrefix: pathPrefix,
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
