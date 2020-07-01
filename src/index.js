import React from './react' // 核心库

import ReactDOM from 'react-dom' // DOM渲染库

const el = React.createElement(
  "div",
  {
    style: {
      color: "#ccc"
    },
    className: "tit"
  },
  React.createElement(
    "span",
    null,
    React.createElement("i", null, "2")
  ),
  "1"
);

console.log(el);

ReactDOM.render(el, document.getElementById('root'))
