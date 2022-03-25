import React, { Component } from 'react'

let num = 0;

export default class Component5 extends Component {
	state = { num_in_state: 0 };
	render() {
		return (
			<div>
				累加器示例：{num}<br/>
				<button onClick={() => this.num++}>增加数字</button>
				{/* the function doesn't work */}
				<br></br>
				state示例:{this.state.num_in_state}<br/>
				
				<button onClick={() => this.setState({ num_in_state: this.state.num_in_state + 1 })}>使用state增加</button>
				<button onClick={() => this.add()}>使用state增加（函数）</button>
      </div>
		)
	}
	add(){
		// this.state.num_in_state++;//doen't work because the view won't loaded
		this.setState({num_in_state:this.state.num_in_state+1});

	}
}
