const { NODE_ENV } = process.env;
const test = NODE_ENV === "test";

module.exports = {
	presets: ["@babel/preset-env", "@babel/preset-react"],
	plugins: ["@babel/plugin-transform-runtime"],
};
