import React from 'react'


//第一层封装 将样式对象和结构分离
// const itemStyle = {border:'1px dashed #ccc', margin:'10px', padding:'10px', boxShadow:'0 0 10px #ccc'}
// const userStyle = {fontSize:'14px'}
// const contentStyle = {fontSize:'12px'}

//第二层封装 合并为一个大的样式对象
// const styles = {
//     item:{border:'1px dashed #ccc', margin:'10px', padding:'10px', boxShadow:'0 0 10px #ccc'},
//     user : {fontSize:'14px'},
//     content : {fontSize:'12px'}
// }

//第三层 抽离为单独的样式表模块
import styles from '@/components/styles'

//使用 function 构造函数，定义函数评论项子组件
export default function CmtItem(props){
    return <div style = {styles.item}>
    <h1 style={styles.user}>评论人： {props.user}</h1>
    <p style={styles.content}>评论内容：{props.content}</p>
    </div>   
}