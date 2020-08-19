import React from 'react'


//使用 function 构造函数，定义函数评论项子组件
export default function CmtItem(props){
    return <div style = {{border:'1px dashed #ccc', margin:'10px', padding:'10px', boxShadow:'0 0 10px #ccc'}}>
    <h1 style={{fontSize:'14px'}}>评论人： {props.user}</h1>
    <p style={{fontSize:'12px'}}>评论内容：{props.content}</p>
    </div>   
}