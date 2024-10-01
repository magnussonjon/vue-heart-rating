module.exports = {
    // Configure the build to create a library for distribution
    css: { extract: false }, // Avoid CSS extraction issues if using scoped styles
    configureWebpack: {
      output: {
        libraryExport: 'default', // Exports the default component
      },
    },
  };
  