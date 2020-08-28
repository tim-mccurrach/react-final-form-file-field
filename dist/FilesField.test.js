"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _FilesField = _interopRequireDefault(require("./FilesField"));

var _FormTemplate = _interopRequireDefault(require("./FormTemplate"));

describe("FilesField", function () {
  test("Check hidden input is rendered", function () {
    var mockOnFileLoad = jest.fn();

    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_FormTemplate["default"], null, /*#__PURE__*/_react["default"].createElement(_FilesField["default"], {
      name: "files",
      onFileLoad: mockOnFileLoad
    }))),
        container = _render.container;

    expect();
  });
});
/*
IN useFilesField.test.js
 - raises an error if no onFileLoad is provided

In this file:
 - check the mock is called when files are added
 - check loading files with the same name
 - check update files works correctly
 - check 
*/