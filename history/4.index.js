import React from './react' // 核心库

import ReactDOM from './react-dom' // DOM渲染库

const el = React.createElement(
  "div",
  {
    className: "title",
    style: {
      color: "red"
    }
  },
  "\u6211\u662F\u7236\u7EA7\u76D2\u5B50",
  React.createElement(
    "span",
    {
      className: "title_span"
    },
    "hello world"
  )
);

ReactDOM.render(el, document.getElementById('root'))
