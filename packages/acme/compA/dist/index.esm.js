import React from 'react';
import styled from 'styled-components';

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: papayawhip;\n  color: ", ";\n\n  &:hover {\n    background: ", ";\n    color: papayawhip;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledTest = styled.div(_templateObject(), function (props) {
  return props.color || "palevioletred";
}, function (props) {
  return props.color || "palevioletred";
});

function Test(props) {
  return React.createElement(StyledTest, props, props.children);
}

export default Test;
