import React from "react";
import ReactDOM from "react-dom";




// 上下文
function createContext() {
  //let value;
  function Provider(props) {
    Provider.value = props.value; // 缓存值
    return props.children// 直接渲染儿子
  }
  function Consumer(props) {
    return props.children(Provider.value)
  }
  // 两个函数组件
  return {
    Consumer,
    Provider,
  }
}


let ThemeContext = createContext()//React.createContext()



class Title extends React.Component {
  render() {
    return <div>Title</div>
  }
}




class Header extends React.Component {
  render() {
    return (
      <div style={{ margin: '10px', border: `1px solid red` }}>Header
        <Title></Title>
      </div>
    )
  }
}


class Content extends React.Component {
  //  给类属性增加静态属性，指向实例，然后这个组件实例上会多一个this.context = Provider 里的value
  static contextType = ThemeContext
  render() {
    return (
      <div style={{ margin: '10px', border: `1px solid ${this.context.color}` }}>
        <button>红</button>
        <button>绿</button>
      </div>
    )
  }
}


// 函数组件，返回一个Consumer， children是一个函数，参数就是 provider的 value属性
function Content1(params) {
  return (
    <ThemeContext.Consumer>
      {
        value => (
          <div style={{ margin: '10px', border: `1px solid ${value.color}` }}>
            <button>红</button>
          </div>
        )
      }
    </ThemeContext.Consumer>
  )
}

class Main extends React.Component {
  render() {
    return (
      <div>Main
        <Content />
      </div>
    )
  }
}


class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' }
  }
  changeColor = (color) => {
    this.setState({ color })
  }
  render() {
    let value = { color: this.state.color, changeColor: this.changeColor }
    const el = (
      <ThemeContext.Provider value={value}>
        <div style={{ margin: '10px', border: `1px solid ${this.state.color}` }}>
          <Header></Header>
          <Main></Main>
        </div>
      </ThemeContext.Provider>
    )
    return el
  }
}

ReactDOM.render(<Panel />, document.getElementById("root"));





