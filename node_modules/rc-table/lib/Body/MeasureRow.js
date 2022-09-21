"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MeasureRow;

var React = _interopRequireWildcard(require("react"));

var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));

var _MeasureCell = _interopRequireDefault(require("./MeasureCell"));

function MeasureRow(_ref) {
  var prefixCls = _ref.prefixCls,
      columnsKey = _ref.columnsKey,
      onColumnResize = _ref.onColumnResize;
  return /*#__PURE__*/React.createElement("tr", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-measure-row"),
    style: {
      height: 0,
      fontSize: 0
    }
  }, /*#__PURE__*/React.createElement(_rcResizeObserver.default.Collection, {
    onBatchResize: function onBatchResize(infoList) {
      infoList.forEach(function (_ref2) {
        var columnKey = _ref2.data,
            size = _ref2.size;
        onColumnResize(columnKey, size.offsetWidth);
      });
    }
  }, columnsKey.map(function (columnKey) {
    return /*#__PURE__*/React.createElement(_MeasureCell.default, {
      key: columnKey,
      columnKey: columnKey,
      onColumnResize: onColumnResize
    });
  })));
}