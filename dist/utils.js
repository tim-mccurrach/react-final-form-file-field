"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addVersionToFilename = void 0;

var addVersionToFilename = function addVersionToFilename(filename, version) {
  var name = filename.substring(0, filename.lastIndexOf("."));
  var extension = filename.split(".").pop();
  return "".concat(name, "(").concat(version, ").").concat(extension);
};

exports.addVersionToFilename = addVersionToFilename;