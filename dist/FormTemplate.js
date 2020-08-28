"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactFinalForm = require("react-final-form");

var _reactFinalFormNamedArrays = require("react-final-form-named-arrays");

/*istanbul ignore file*/
var FormTemplate = function FormTemplate(props) {
  var onSubmit = props.onSubmit,
      otherProps = (0, _objectWithoutProperties2["default"])(props, ["onSubmit"]);
  return /*#__PURE__*/_react["default"].createElement(_reactFinalForm.Form, (0, _extends2["default"])({
    onSubmit: props.onSubmit || function () {},
    mutators: _reactFinalFormNamedArrays.arrayMutators,
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit;
      return /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: handleSubmit
      }, props.children);
    }
  }, otherProps));
};

var _default = FormTemplate;
exports["default"] = _default;