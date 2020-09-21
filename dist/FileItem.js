"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _mimeTypeMaps = require("./mimeTypeMaps");

var _styledComponents = require("./styledComponents");

var FileItem = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var fileName = props.fileName,
      removeFile = props.removeFile,
      downloadFile = props.downloadFile,
      inProgress = props.inProgress,
      progress = props.progress,
      mimeType = props.mimeType,
      dragProps = props.dragProps,
      otherProps = (0, _objectWithoutProperties2["default"])(props, ["fileName", "removeFile", "downloadFile", "inProgress", "progress", "mimeType", "dragProps"]);
  var fileType = (0, _mimeTypeMaps.getFileType)(props.mimeType);
  var icon = _mimeTypeMaps.fileTypeToFaIcon[fileType];
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.FileItemLi, (0, _extends2["default"])({
    ref: ref
  }, otherProps), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFaIcon, {
    icon: icon,
    iconColor: fileType
  }), !props.inProgress && typeof props.downloadFile === "string" && /*#__PURE__*/_react["default"].createElement(_styledComponents.DownloadButton, {
    as: "a",
    href: props.downloadFile,
    "aria-label": "Download File"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faArrowAltCircleDown
  })), !props.inProgress && typeof props.downloadFile === "function" && /*#__PURE__*/_react["default"].createElement(_styledComponents.DownloadButton, {
    onClick: props.downloadFile,
    "aria-label": "Download File"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faArrowAltCircleDown
  })), /*#__PURE__*/_react["default"].createElement(_styledComponents.DeleteButton, {
    onClick: props.removeFile,
    "aria-label": "Remove File"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTrashAlt
  })), /*#__PURE__*/_react["default"].createElement("div", null, props.fileName), props.inProgress && /*#__PURE__*/_react["default"].createElement("progress", {
    role: "progressbar",
    value: props.progress,
    max: 100
  }));
});

exports.FileItem = FileItem;
FileItem.propTypes = {
  // required
  fileName: _propTypes["default"].string.isRequired,
  removeFile: _propTypes["default"].func.isRequired,
  //optional
  downloadFile: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  inProgress: _propTypes["default"].bool,
  progress: _propTypes["default"].number,
  mimeType: _propTypes["default"].string
};