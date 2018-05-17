'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'nav',
    null,
    _react2.default.createElement(
      _reactRouterDom.NavLink,
      { to: '/', activeClassName: 'active' },
      'Home'
    ),
    " | ",
    _react2.default.createElement(
      _reactRouterDom.NavLink,
      { to: '/courses', activeClassName: 'active' },
      'Courses'
    ),
    " | ",
    _react2.default.createElement(
      _reactRouterDom.NavLink,
      { to: '/about', activeClassName: 'active' },
      'About'
    )
  );
};
exports.default = Header;