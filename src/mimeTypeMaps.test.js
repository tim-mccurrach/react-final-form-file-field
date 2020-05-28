import { getFileType } from "./mimeTypeMaps";

describe("getFileType", () => {
	test.each([
		["application/word", "word"],
		["application/excel", "excel"],
		["application/powerpoint", "powerpoint"],
		["application/pdf", "pdf"],
		["image/anything", "image"],
		["text", "text"],
		["video", "video"],
		["anythingelse", "other"],
		["application/anythingelse", "other"],
	])("%s should return the type %s", (input, expected) => {
		expect(getFileType(input)).toEqual(expected);
	});

	it("should return 'other' if called with nothing", () => {
		expect(getFileType()).toEqual("other");
	});
});
