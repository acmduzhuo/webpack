import React from 'react'

export default class BindEvent extends React.Component{
    constructor(){
        super()
        //私有数据
        this.state = {
            msg:'嘿嘿'
        }
    }
    render(){
        return<div>
            BindEvent 组件
            <hr/>
            {/* react有一套自己的事件绑定机制，事件名是小驼峰命名 */}
            {/* <button onClick={function() { console.log('Hello') } }>按钮</button> */}
            {/* <button onClick={this.myclickHandler}>按钮</button> */}

            {/* 注意 onClick 只接受function 作为处理函数 */}
            {/* 注意 箭头函数本身就是一个匿名的函数 */}

            {/* <button onClick={ 
                ()=>this.show('Hello, World', ' JS')
            }>按钮</button> */}
            <button onClick = {()=>this.show('Hello,', 'World!')}
            >按钮啊</button>
            <h3>{this.state.msg}</h3>
        </div>
    }
    show = (item1, item2) => {
        console.log('show方法已被调用了'+item1+item2);

        // console.log(this)
        // this.state.msg = '哈哈'
        //在React中，如果想为state赋值，不能用上述方法，应该：
        this.setState({
            msg: 'haha ' + item1 + item2
        })
    }
    // show (){
    //     console.log("aaa");
    // }
}