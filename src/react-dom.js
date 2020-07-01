

function render(element, root) {

  // 如果是数字或者字符串直接放到根结点中
  if (typeof element === 'number' || typeof element === 'string') {
    root.appendChild(document.createTextNode(element))
    return
  }

  const { type, props } = element

  const el = document.createElement(type)


  for (let propName in props) {

    if (propName === 'children') {

      props.children.forEach(res => render(res, el))

    } else if (propName === 'className') {

      el.className = props.className;

    } else if (propName === 'style') {

      for (let attr in props.style) {
        el.style[attr] = props.style[attr];
      }

    }
  }

  root.appendChild(el)

}



export default {
  render
}