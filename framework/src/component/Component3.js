import React from 'react';

const second={backgroundColor:"blue"};
const third={background:"green"};
/**
 * 双{{}}外层的大括号表示需要在html里使用js，内层大括号表示使用一个对象
 */

export default class Component3 extends React.Component {
    render(){
        return (
            <div className="box1">
                <div style={{backgroundColor:"pink"}}>盒子</div>
                <div style={second}>另一个盒子</div> 
                <div style={third}>第三个盒子</div> 
            </div>
            
        )
    }
}