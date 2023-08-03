module.exports = {
  "src/**/*.{ts,tsx}": (files) => {
    return `jest --passWithNoTests --findRelatedTests=${files.join(" ")}`;
  },
};
