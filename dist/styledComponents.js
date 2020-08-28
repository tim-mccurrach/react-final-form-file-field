"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteButton = exports.DownloadButton = exports.StyledFaIcon = exports.FileItemLi = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _mimeTypeMaps = require("./mimeTypeMaps");

var _colourMap;

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n\tleft: 0.2em;\n\tcolor: red;\n\t&:hover,\n\t&:focus {\n\t\tcolor: darkred;\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n\tleft: 1.4em;\n\tcolor: green;\n\n\t&:hover,\n\t&:focus {\n\t\tcolor: darkgreen;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n\tfont-size: 4em;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-bottom: 3px;\n\tdisplay: block;\n\tcolor: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n\twidth: 12ch;\n\tposition: relative;\n\ttext-align: center;\n\tdisplay: inline-block;\n\tvertical-align: top;\n\tmargin-left: 0.5em;\n\tmargin-right: 0.5em;\n\n\tdiv {\n\t\tmargin: 0;\n\t\toverflow-wrap: break-word;\n\t\tline-height: 1em;\n\t\tmax-height: 3em;\n\t\toverflow: hidden;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\tbutton {\n\t\t\topacity: 1;\n\t\t}\n\t}\n\n\tprogress {\n\t\twidth: 12ch;\n\t}\n\n\tbutton {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tfont-size: 1.4em;\n\t\tdisplay: block;\n\t\tborder: none;\n\t\tbackground: none;\n\t\topacity: 0;\n\n\t\t&:focus {\n\t\t\topacity: 1;\n\t\t}\n\n\t\t&:hover {\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var colourMap = (_colourMap = {}, (0, _defineProperty2["default"])(_colourMap, _mimeTypeMaps.fileTypes.word, "#2a347d"), (0, _defineProperty2["default"])(_colourMap, _mimeTypeMaps.fileTypes.powerpoint, "#c66035"), (0, _defineProperty2["default"])(_colourMap, _mimeTypeMaps.fileTypes.excel, "#30703a"), (0, _defineProperty2["default"])(_colourMap, _mimeTypeMaps.fileTypes.pdf, "#ca433c"), (0, _defineProperty2["default"])(_colourMap, _mimeTypeMaps.fileTypes.image, "#6be8de"), (0, _defineProperty2["default"])(_colourMap, _mimeTypeMaps.fileTypes.other, "#f7c46c"), (0, _defineProperty2["default"])(_colourMap, _mimeTypeMaps.fileTypes.video, "#602976"), (0, _defineProperty2["default"])(_colourMap, _mimeTypeMaps.fileTypes.text, "#000"), _colourMap);

var FileItemLi = _styledComponents["default"].li(_templateObject());

exports.FileItemLi = FileItemLi;
var StyledFaIcon = (0, _styledComponents["default"])(function (_ref) {
  var iconColor = _ref.iconColor,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["iconColor"]);
  return /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, rest);
})(_templateObject2(), function (props) {
  return colourMap[props.iconColor];
});
exports.StyledFaIcon = StyledFaIcon;

var DownloadButton = _styledComponents["default"].button(_templateObject3());

exports.DownloadButton = DownloadButton;

var DeleteButton = _styledComponents["default"].button(_templateObject4());

exports.DeleteButton = DeleteButton;