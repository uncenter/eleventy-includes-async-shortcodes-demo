module.exports = (eleventyConfig) => {
    eleventyConfig.addAsyncShortcode("beep", async () => {
        return "42";
    });
    eleventyConfig.addShortcode("beepSync", () => {
        return "42";
    });

    return {};
};
