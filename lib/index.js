'use strict'

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.TitleBar = undefined

const _react = require('react')

const _react2 = _interopRequireDefault(_react)

const _propTypes = require('prop-types')

const _propTypes2 = _interopRequireDefault(_propTypes)

const _windowControls = require('./window-controls')

const _menu = require('./menu')

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

const TitleBar = exports.TitleBar = ({ onVisibilityChange, children, icon, menu, disableMinimize, disableMaximize, className, currentWindow }) => _react2.default.createElement(
  'div',
  { id: 'electron-app-title-bar', className: `electron-app-title-bar ${className || ''}` },
  _react2.default.createElement('div', { className: 'resize-handle resize-handle-top' }),
  _react2.default.createElement('div', { className: 'resize-handle resize-handle-left' }),
  !!icon && _react2.default.createElement('img', { className: 'icon', src: icon }),
  !!menu && _react2.default.createElement(_menu.MenuBar, { menu: menu, onVisibilityChange: onVisibilityChange }),
  children,
  _react2.default.createElement(_windowControls.WindowControls, { disableMinimize: disableMinimize, disableMaximize: disableMaximize, currentWindow: currentWindow })
)

TitleBar.propTypes = {
  children: _propTypes2.default.node,
  icon: _propTypes2.default.string,
  disableMinimize: _propTypes2.default.bool,
  disableMaximize: _propTypes2.default.bool,
  menu: _propTypes2.default.array,
  currentWindow: _propTypes2.default.object,
}
