"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _jestAxe = require("jest-axe");

var _FileItem = require("./FileItem");

var removeFileMock = jest.fn();
var props = {
  fileName: "testFile.pdf",
  progress: 50,
  removeFile: removeFileMock
};
describe("FileItem", function () {
  test("check file name is rendered", function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, props)),
        container = _render.container;

    expect(container).toHaveTextContent("testFile.pdf");
  });
  describe("Progress Bar", function () {
    it("should show when inProgress is true", function () {
      var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, (0, _extends2["default"])({}, props, {
        inProgress: true
      }))),
          getByRole = _render2.getByRole;

      expect(getByRole("progressbar")).toBeInTheDocument();
    });
    it("should have value equal to progress", function () {
      var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, (0, _extends2["default"])({}, props, {
        inProgress: true
      }))),
          getByRole = _render3.getByRole,
          rerender = _render3.rerender;

      expect(getByRole("progressbar")).toHaveValue(50);
      rerender( /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, (0, _extends2["default"])({}, props, {
        inProgress: true,
        progress: 5
      })));
      expect(getByRole("progressbar")).toHaveValue(5);
    });
    it("should not show when inProgress is false", function () {
      var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, (0, _extends2["default"])({}, props, {
        inProgress: false
      }))),
          queryByRole = _render4.queryByRole;

      expect(queryByRole("progressbar")).not.toBeInTheDocument();
    });
    it("should not show when inProgress is missing", function () {
      var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, props)),
          queryByRole = _render5.queryByRole;

      expect(queryByRole("progressbar")).not.toBeInTheDocument();
    });
  });
  describe("Download Button", function () {
    it("should be an anchor if downloadFile is a string", function () {
      var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, (0, _extends2["default"])({}, props, {
        downloadFile: "/some/url"
      }))),
          getByRole = _render6.getByRole;

      var link = getByRole("link");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/some/url");
    });
    it("should be a button if downloadFile is a function", function () {
      var downloadFile = jest.fn();

      var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, (0, _extends2["default"])({}, props, {
        downloadFile: downloadFile
      }))),
          queryAllByRole = _render7.queryAllByRole,
          debug = _render7.debug;

      var downloadButton = queryAllByRole("button")[0];
      expect(downloadButton).toBeInTheDocument();

      _react2.fireEvent.click(downloadButton);

      expect(downloadFile).toHaveBeenCalledTimes(1);
    });
    it("should not display if downloadFile is missing", function () {
      var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, props)),
          queryByRole = _render8.queryByRole,
          queryAllByRole = _render8.queryAllByRole;

      var link = queryByRole("link");
      expect(link).not.toBeInTheDocument(); // only 1 button (remove) should be present, as apposed to 2

      var buttons = queryAllByRole("button");
      expect(buttons.length).toEqual(1);
    });
    it("should not be displayed if inProgress is true - url", function () {
      var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, (0, _extends2["default"])({}, props, {
        downloadFile: "some/url",
        inProgress: true
      }))),
          queryByRole = _render9.queryByRole;

      var link = queryByRole("link");
      expect(link).not.toBeInTheDocument();
    });
    it("should not be displayed if inProgress is true - function", function () {
      var downloadFunction = jest.fn();

      var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, (0, _extends2["default"])({}, props, {
        downloadFile: downloadFunction,
        inProgress: true
      }))),
          queryAllByRole = _render10.queryAllByRole;

      var buttons = queryAllByRole("button");
      expect(buttons.length).toEqual(1);
    });
  });
  describe("Cancel Button", function () {
    test("It calls the remove file prop", function () {
      var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, props)),
          getByRole = _render11.getByRole;

      var removeButton = getByRole("button");

      _react2.fireEvent.click(removeButton);

      expect(removeFileMock).toHaveBeenCalledTimes(1);
    });
  });
  test("Check snapshot", function () {
    var _render12 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, props)),
        container = _render12.container;

    expect(container).toMatchInlineSnapshot("\n      <div>\n        <li\n          class=\"sc-AxjAm lovcQI\"\n        >\n          <svg\n            aria-hidden=\"true\"\n            class=\"svg-inline--fa fa-file fa-w-12 sc-AxirZ bNgdUu\"\n            data-icon=\"file\"\n            data-prefix=\"fas\"\n            focusable=\"false\"\n            role=\"img\"\n            viewBox=\"0 0 384 512\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              d=\"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z\"\n              fill=\"currentColor\"\n            />\n          </svg>\n          <button\n            aria-label=\"Remove File\"\n            class=\"sc-AxhCb elDDMr\"\n          >\n            <svg\n              aria-hidden=\"true\"\n              class=\"svg-inline--fa fa-trash-alt fa-w-14 \"\n              data-icon=\"trash-alt\"\n              data-prefix=\"fas\"\n              focusable=\"false\"\n              role=\"img\"\n              viewBox=\"0 0 448 512\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n            >\n              <path\n                d=\"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"\n                fill=\"currentColor\"\n              />\n            </svg>\n          </button>\n          <div>\n            testFile.pdf\n          </div>\n        </li>\n      </div>\n    ");
  });
  test("Check accessability", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _render13, container, results;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render13 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement(_FileItem.FileItem, props))), container = _render13.container;
            _context.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context.sent;
            expect(results).toHaveNoViolations();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});