module.exports = (eleventyConfig) => {
  eleventyConfig.addAsyncShortcode("beep", async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    return "42";
  });

  return {};
};
