export function createElement(type, config = {}, ...children) {
  return {
    $$typeof: Symbol.for('react.element'),
    type,
    props: {
      ...config,
      children
    }
  }
}


// function createElement(el, attr, ...children) {
//   console.log(el, attr, children);
//   // return {
//   //   $$typeof: Symbol.for("react.element"),
//   //   type: el,
//   //   key: null,
//   //   ref: null,
//   //   props: {
//   //     ...attr,
//   //     children,
//   //   }
//   // }

//   return 1
// }

export default {
  createElement
}
