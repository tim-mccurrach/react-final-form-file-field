"use strict";

var _mimeTypeMaps = require("./mimeTypeMaps");

describe("getFileType", function () {
  test.each([["application/word", "word"], ["application/excel", "excel"], ["application/powerpoint", "powerpoint"], ["application/pdf", "pdf"], ["image/anything", "image"], ["text", "text"], ["video", "video"], ["anythingelse", "other"], ["application/anythingelse", "other"]])("%s should return the type %s", function (input, expected) {
    expect((0, _mimeTypeMaps.getFileType)(input)).toEqual(expected);
  });
  it("should return 'other' if called with nothing", function () {
    expect((0, _mimeTypeMaps.getFileType)()).toEqual("other");
  });
});