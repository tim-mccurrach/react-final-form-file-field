"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _reactFinalFormNamedArrays = require("react-final-form-named-arrays");

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultConfig = {
  multiple: true
}; // rethink this, should I use defaultConfig as the default argument
// how will this fit in with defaultProps with the component, what
// is least confusing

var useFilesField = function useFilesField(name, onFileLoad) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var multiple = config.multiple,
      accepts = config.accepts,
      fieldConfig = (0, _objectWithoutProperties2["default"])(config, ["multiple", "accepts"]);
  var inputRef = (0, _react.useRef)(null);

  var _useFieldArray = (0, _reactFinalFormNamedArrays.useFieldArray)(name, _objectSpread({
    getItemName: function getItemName(v) {
      return v;
    }
  }, fieldConfig)),
      meta = _useFieldArray.meta,
      fields = _useFieldArray.fields;

  var onChange = function onChange(_ref) {
    var target = _ref.target;
    var nameList = meta.data.NAME_LIST;
    Array.from(target.files).forEach(function (file) {
      var filename = file.name;

      if (nameList.includes(filename)) {
        var count = nameList.reduce(function (n, val) {
          return n + (val === file.name);
        }, 0);
        filename = (0, _utils.addVersionToFilename)(filename, count);
      }

      onFileLoad({
        file: file,
        filename: filename,
        addFile: function addFile(value) {
          return fields.push(value, filename);
        },
        removeFile: function removeFile() {
          return fields.remove(filename);
        },
        updateFile: function updateFile(value) {
          return fields.update(filename, value);
        }
      });
    });
  };

  var uploadFiles = function uploadFiles() {
    inputRef.current.click();
  };

  var fileInputProps = {
    ref: inputRef,
    hidden: true,
    multiple: multiple,
    accepts: accepts,
    type: "file",
    onChange: onChange
  };
  return {
    inputProps: fileInputProps,
    files: fields,
    meta: meta,
    uploadFiles: uploadFiles
  };
};

var _default = useFilesField;
exports["default"] = _default;