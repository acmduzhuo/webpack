import React from 'react'
import ReactDOM from 'react-dom'

//第一种创建组件的方式
//无状态组件
export default function Hello(props){//必须大写，否则浏览器会把他当做一个普通的标签来渲染，该DOM元素就失去了它的意义
    //如果在一个组件中，return一个null，则表示此组件什么都不渲染
    //return null
    //必须返回一个合法的jsx
    ///props.name = 'zs'
    console.log(props)//形参
    //不论是Vue还是React，组件中的props永远都只能是只读的，不能被重新赋值
return <div>这是Hello组件 --- {props.name} --- {props.age} --- {props.gender}</div>//可以返回一个虚拟DOM
}

//把组件暴露出去
//export default Hello
