import React from 'react' // 核心库
import ReactDOM from 'react-dom' // DOM渲染库

/** 
 * 1. 将h1渲染到root节点内部
 * 2. 看起来像html，其实是js，但并不是标准的js语法
 * 3. 在webpack打包的时候，会把这种jsx语法编译成纯js语法
 */

// const html = <h1 id='title'>hello</h1>
// console.log(html);

//const html = React.createElement('h1', { id: 'title' }, 'hello')

function createElement(type, config = {}, ...children) {
  return {
    $$typeof: Symbol.for('react.element'),
    type,
    props: {
      ...config,
      children
    }
  }
}

const html = createElement('h1', { id: 'title' }, 'hello')
console.log(html);


/** 
 * 既可以用JSX写法也可以不用，两种写法
 * 
 * 1 <h1 id='title'>hello</h1>
 * 2 React.createElement('h1', { id: 'title' }, 'hello')
 * 
 * 但是第二种方式不方便
 */




/** 
 * 何为虚拟DOM
 * React元素本质是一个普通的js对象
 * ReactDOM会保证浏览器中的DOM和你的React元素一致
 */




/** 
 * JSX表达式
 * 
 * 表达式就是变量和操作符的集合，计算结果
 * JSX任意使用表达式，表达式要放在大括号里 
 * 
 * JSX更像js，而非html
 */




/** 
 *  React如何区分jsx元素和表达式呢？
 * 
 * < 开头的就是jsx元素
 * {}  就是表达式
 * 
 * jsx赋值的时候，尽量避免使用js关键字
 * 例如：样式 class -> className 
 *      循环 for ->  htmlFor
 *  
 * JSX也是 JS 对象
 * 
 */


ReactDOM.render(
  <h1>hello</h1>,
  document.getElementById('root')
)