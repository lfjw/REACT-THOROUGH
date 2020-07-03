import React from "react";
import ReactDOM from "react-dom";

class ScrollList extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()

    this.state = { message: [] }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        message: [`${this.state.message.length}`, ...this.state.message]
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  // 组件重新更新前，获取DOM快照，获取更新前的DOM
  getSnapshotBeforeUpdate() {
    // componentDidUpdate 返回值 传递给第三个参数
    return this.container.current.scrollHeight; // 内容高度
  }
  // DOM更新后
  componentDidUpdate(prevProps, prevState, prevScrollHeight) {
    let nextScrollTop = this.container.current.scrollTop // 新的向上滚动的高度
    this.container.current.scrollHeight = nextScrollTop + (this.container.current.scrollHeight - prevScrollHeight)
  }
  render() {
    const styleObj = {
      width: '100px',
      height: '100px',
      border: '1px solid red',
      overflow: 'auto'
    }

    return (
      <div style={styleObj} ref={this.container}>
        {
          this.state.message.reverse().map((res, index) => {
            return <div key={index}>{index}</div>
          })
        }
      </div>
    )
  }
}


ReactDOM.render(<ScrollList></ScrollList>, document.getElementById("root"));





