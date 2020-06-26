import React from 'react' // 核心库

import ReactDOM from 'react-dom' // DOM渲染库


function greeting(name) {
  if (name) {
    return <h1>hello {name}</h1>
  } else {
    return <h1>hello jw</h1>
  }
}
const element = greeting('哈哈')



let names = ['jw', 'ww', 'zjl', 'pwb']
// map 把字符串数组映射为了一个div的React元素数组
// 在列表中每一个子元素都应该有一个唯一的key属性
// 为了后期的dom-diff
// 为了高效的dom-diff
// 虚拟DOM
// 不建议索引作为key值
const element1 = names.map((item, index) => (<div key={item}>{item}</div>))
const element2 = <>{element1}</>
console.log(element1);



/** 
 *    虚拟DOM                 浏览器 真实DOM
 *    div -> jw               div -> jw
 *    div -> ww               div -> ww
 *    div -> zjl              div -> zjl
 *    div -> pwb              div -> pwb
 * 
 *    ReactDOM.render保持虚拟DOM和真实DOM一致
 *    React元素更改，进行对比
 * 
 *    旧虚拟DOM                 浏览器 真实DOM        新的虚拟DOM
 *    div -> jw               div -> jw             div -> pwb
 *    div -> ww               div -> ww             div -> zjl
 *    div -> zjl              div -> zjl            div -> ww
 *    div -> pwb              div -> pwb            div -> jw
 *    倒叙更新视图，如何性能更好呢？
 *    1 尽量复用老DOM，（查找，如果都有就不需要删除）
 *    2 新元素找老元素，通过key来寻找，所以尽量找唯一的key值，而不建议使用index，因为这样会删除老元素，在创建新元素
 *    3 key一样，类型一样，就是一个元素节点，否则就会重新渲染
 */
ReactDOM.render(element2, document.getElementById('root'))