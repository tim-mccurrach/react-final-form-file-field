"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _useFilesField2 = _interopRequireDefault(require("./useFilesField"));

var FilesField = function FilesField(props) {
  var name = props.name,
      onFileLoad = props.onFileLoad,
      id = props.id,
      children = props.children,
      otherProps = (0, _objectWithoutProperties2["default"])(props, ["name", "onFileLoad", "id", "children"]);

  var _useFilesField = (0, _useFilesField2["default"])(name, onFileLoad, otherProps),
      uploadFiles = _useFilesField.uploadFiles,
      inputProps = _useFilesField.inputProps,
      files = _useFilesField.files,
      meta = _useFilesField.meta;

  if (children && typeof children !== "function") {
    throw new Error("children must be funtion for FileField - ".concat(name));
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    id: id
  }, inputProps)), children && children({
    uploadFiles: uploadFiles,
    files: files,
    meta: meta,
    inputId: id
  }));
};

var _default = FilesField;
exports["default"] = _default;