import React from 'react'

export default class BindEvent extends React.Component{
    constructor(){
        super()
        //私有数据
        this.state = {}
    }
    render(){
        return<div>
            BindEvent 组件
            <hr/>
            {/* react有一套自己的事件绑定机制，事件名是小驼峰命名 */}
            {/* <button onClick={function() { console.log('Hello') } }>按钮</button> */}
            <button onClick={this.myclickHandler}>按钮</button>
        </div>
    }
    myclickHandler(){
        console.log(2);
    }
}