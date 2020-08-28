"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileTypeToFaIcon = exports.getFileType = exports.fileTypes = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _fileTypeToFaIcon;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var microsoftFiles = ["word", "powerpoint", "excel"];
var fileTypeList = ["video", "pdf", "text", "image", "other"].concat(microsoftFiles);
var fileTypes = fileTypeList.reduce(function (obj, fileType) {
  return _objectSpread(_objectSpread({}, obj), {}, (0, _defineProperty2["default"])({}, fileType, fileType));
}, {});
exports.fileTypes = fileTypes;

var getFileType = function getFileType() {
  var mimeType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var _mimeType$split = mimeType.split("/"),
      _mimeType$split2 = (0, _slicedToArray2["default"])(_mimeType$split, 2),
      type = _mimeType$split2[0],
      subtype = _mimeType$split2[1];

  if (fileTypeList.includes(type)) {
    return type;
  }

  if (type === "application") {
    if (subtype === fileTypes.pdf) {
      return fileTypes.pdf;
    }

    var file;

    var _iterator = _createForOfIteratorHelper(microsoftFiles),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        file = _step.value;

        if (subtype.includes(file)) {
          return file;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return fileTypes.other;
};

exports.getFileType = getFileType;
var fileTypeToFaIcon = (_fileTypeToFaIcon = {}, (0, _defineProperty2["default"])(_fileTypeToFaIcon, fileTypes.word, _freeSolidSvgIcons.faFileWord), (0, _defineProperty2["default"])(_fileTypeToFaIcon, fileTypes.powerpoint, _freeSolidSvgIcons.faFilePowerpoint), (0, _defineProperty2["default"])(_fileTypeToFaIcon, fileTypes.excel, _freeSolidSvgIcons.faFileExcel), (0, _defineProperty2["default"])(_fileTypeToFaIcon, fileTypes.pdf, _freeSolidSvgIcons.faFilePdf), (0, _defineProperty2["default"])(_fileTypeToFaIcon, fileTypes.image, _freeSolidSvgIcons.faFileImage), (0, _defineProperty2["default"])(_fileTypeToFaIcon, fileTypes.other, _freeSolidSvgIcons.faFile), (0, _defineProperty2["default"])(_fileTypeToFaIcon, fileTypes.video, _freeSolidSvgIcons.faFileVideo), (0, _defineProperty2["default"])(_fileTypeToFaIcon, fileTypes.text, _freeSolidSvgIcons.faFileAlt), _fileTypeToFaIcon);
exports.fileTypeToFaIcon = fileTypeToFaIcon;