//#region 
import React from 'react'

export default class BindEvent extends React.Component{
    constructor(){
        super()
        //私有数据
        this.state = {
            msg:'嘿嘿',
            name : 'zs',
            age : 22,
            gender : '男'
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
            {/* <button onClick={()=>{this.myclickHandler()}}>按钮</button>  */}
            {/* <button onClick={ 
                ()=>this.show('Hello, World', ' JS')
            }>按钮</button> */}
            <button onClick = {()=>this.show('Hello,', 'World!')}
            >按钮啊</button>
            <h3>{this.state.msg}</h3>
            {/* 如果只是把 文本框 的value属性绑定到了state状态，但不提供onChange处理函数，得到的文本框是只读文本框*/}

            {/* 要么提供readOnly属性，要么提供onChange属性 */}
            <input type="text" style={{width : '100%'}} value={this.state.msg} onChange={()=>this.txtChanged()}/>
        </div>
    }
    // myclickHandler(){
    //     console.log("Hello World!");
    // }

    //每当文本框内容变化，必然调用该函数
    txtChanged = () => {
        console.log("变化了")
    }
    show = (item1, item2) => {
        console.log('show方法已被调用了'+item1+item2);

        // console.log(this)
        // this.state.msg = '哈哈'
        //在React中，如果想为state赋值，不能用上述方法，应该：
        this.setState({

            // z在setState，只会把对应的state状态更新，而不会覆盖其他的state状态
            msg: 'haha ' + item1 + item2,
            name : '李四'
        }, function(){
            console.log(this.state.msg);
        })

        //console.log(this.state.msg);
        //异步执行，更新未完毕，便执行了输出
        //需要使用this.setState({}, callback)回调函数
    }

    // show (){
    //     console.log("aaa");
    // }
}
//#endregion