import { addVersionToFilename } from "../src/utils";

describe("addVersionToFilename", () => {
	test.each([
		["foo.bar", 2, "foo(2).bar"],
		["foo.bar.bar", 3, "foo.bar(3).bar"],
	])(`(%s, %i) => %s`, (filename, version, expected) => {
		expect(addVersionToFilename(filename, version)).toEqual(expected);
	});
});
