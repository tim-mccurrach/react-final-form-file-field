"use strict";

var _utils = require("./utils");

describe("addVersionToFilename", function () {
  test.each([["foo.bar", 2, "foo(2).bar"], ["foo.bar.bar", 3, "foo.bar(3).bar"]])("(%s, %i) => %s", function (filename, version, expected) {
    expect((0, _utils.addVersionToFilename)(filename, version)).toEqual(expected);
  });
});