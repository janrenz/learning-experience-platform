module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  coverageReporters: ["text", "lcov"],
  coverageDirectory: "reports/coverage",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "jest tests"
      }
    ]
  ],
  transformIgnorePatterns: ["/node_modules/(?!@babel)"],
  snapshotSerializers: ["jest-serializer-vue"]
};
