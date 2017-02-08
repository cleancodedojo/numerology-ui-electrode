module.exports = {
  cache: {
    cacheId: "numerology-ui-electrode",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "numerology-ui-electrode",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
