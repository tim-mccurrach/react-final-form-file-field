"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addVersionToFilename = exports.countDuplicates = void 0;

var countDuplicates = function countDuplicates(array, value) {
  var name = value.substring(0, value.lastIndexOf("."));
  var extension = value.split(".").pop();
  var pattern;

  if (name) {
    pattern = "".concat(name, "(\\(\\d+\\))?\\.").concat(extension);
  } else {
    pattern = "".concat(extension, "(\\(\\d+\\))?");
  }

  var count = 0;
  array.forEach(function (item) {
    if (item.match(pattern)) {
      count += 1;
    }
  });
  return count;
};

exports.countDuplicates = countDuplicates;

var addVersionToFilename = function addVersionToFilename(filename, version) {
  var name = filename.substring(0, filename.lastIndexOf("."));
  var extension = filename.split(".").pop();

  if (name) {
    return "".concat(name, "(").concat(version, ").").concat(extension);
  }

  return "".concat(extension, "(").concat(version, ")");
};

exports.addVersionToFilename = addVersionToFilename;