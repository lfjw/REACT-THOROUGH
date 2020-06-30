import React from 'react' // 核心库

import ReactDOM from 'react-dom' // DOM渲染库

/** 
 *  React元素都是不可变的对象
 *        只读属性
 *  React只会更新必要的部分 
 *        新老元素对比，变得更新，不变的不更新
 *        新老的虚拟DOM一样，不做任何操作
 *        为什么不是列表，key就不是必须的呢？都是li，类型一样，map的元素类型一致，直接<li>1</li><li>2</li>机械对比,不需要加key
 *        <div><p></p><span><h1></h1></span></div>这个不需要区分类型
 */

function tick() {
  const element = <div>{new Date().toLocaleTimeString()}</div>
  // 并不是完全重建，也会进行dom-diff
  ReactDOM.render(element, document.getElementById('root'))
}

/** 
 * 错误示范
*/

// const element = <div>{new Date().toLocaleTimeString()}</div>
// function tick(params) {
//   element.props.children = new Date().toLocaleTimeString()
//   ReactDOM.render(element, document.getElementById('root'))
// }

// 要想渲染，只能重新创建 children不可改变

setInterval(tick, 1000);


