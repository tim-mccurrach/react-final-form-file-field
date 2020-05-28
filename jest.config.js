module.exports = {
	clearMocks: true,
	coverageDirectory: "coverage",
	collectCoverageFrom: ["src/**/*.+(js|jsx|ts|tsx)"],
	setupFilesAfterEnv: [
		"@testing-library/jest-dom/extend-expect",
		"jest-axe/extend-expect",
	],
};
