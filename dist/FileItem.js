"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileItem = FileItem;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _airbnbPropTypes = require("airbnb-prop-types");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _mimeTypeMaps = require("./mimeTypeMaps");

var _styledComponents = require("./styledComponents");

/*
export default function DraggableFileItem(props) {
	return (
		<Draggable
			key={props.fileName}
			index={props.index}
			draggableId={props.fileName}
		>
			{(provided) => <FileItem dragProps={provided} {...props} />}
		</Draggable>
	);
}
*/
function FileItem(props) {
  var fileType = (0, _mimeTypeMaps.getFileType)(props.mimeType);
  var icon = _mimeTypeMaps.fileTypeToFaIcon[fileType];
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.FileItemLi, (0, _extends2["default"])({
    ref: props.dragProps.innerRef
  }, props.dragProps.draggableProps, props.dragProps.dragHandleProps), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFaIcon, {
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
}

FileItem.defaultProps = {
  dragProps: {}
};
FileItem.propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  // required
  fileName: _propTypes["default"].string.isRequired,
  progress: _propTypes["default"].number.isRequired,
  removeFile: _propTypes["default"].func.isRequired,
  //optional
  downloadFile: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  inProgress: _propTypes["default"].bool,
  mimeType: _propTypes["default"].string,
  dragProps: _propTypes["default"].object
});