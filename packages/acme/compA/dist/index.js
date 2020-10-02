'use strict';

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var taggedTemplateLiteral = _taggedTemplateLiteral;

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  background: papayawhip;\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n    color: papayawhip;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledTest = styled__default['default'].div(_templateObject(), function (props) {
  return props.color || "palevioletred";
}, function (props) {
  return props.color || "palevioletred";
});
console.log('coucou');

function Test(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledTest, props, props.children);
}

module.exports = Test;
