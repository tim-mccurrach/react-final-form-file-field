import { addVersionToFilename, countDuplicates } from "../src/utils";

describe("countDuplicates", () => {
	test.each([
		[["foo", "bar"], "foo", 1],
		[["foo", "foo(1)", "foo(2)", "bar"], "foo", 3],
		[["foo.pdf", "bar"], "foo.pdf", 1],
		[["foo.pdf", "foo(1).pdf", "bar"], "foo.pdf", 2],
		[["foo3.pdf", "bar"], "foo.pdf", 0],
	])(`(%s, %i) => %s`, (array, value, expected) => {
		expect(countDuplicates(array, value)).toEqual(expected);
	});
});

describe("addVersionToFilename", () => {
	test.each([
		["foo", 52, "foo(52)"],
		["foo.bar", 2, "foo(2).bar"],
		["foo.bar.bar", 3, "foo.bar(3).bar"],
	])(`(%s, %i) => %s`, (filename, version, expected) => {
		expect(addVersionToFilename(filename, version)).toEqual(expected);
	});
});
