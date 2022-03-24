import React from 'react';

let flag=true;
const arr=['vue','react','angular'];

export default class Component4 extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:flag?"yellow":"green"}}>
                三元运算符
                <div style={{backgroundColor:"aqua"}}>
                    循环的方式：map。react不允许在这里的js使用for循环，因为它没有返回值。
                    <ul>
                        {
                            arr.map((item,index) => {
                                return <li key={index}>{item}</li>;
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}