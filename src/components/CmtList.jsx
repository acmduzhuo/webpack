import React from 'react'

//导入评论项子组件
import CmtItem from './CmtItem'


//使用 class 关键字定义父组件
export default class CmtList extends React.Component{
    constructor(){
        super()
        this.state = {
            CommentList:[
                {id: 1, user: '张三', content: '哈哈 沙发'},
                {id: 2, user: '李四', content: '哈哈 板凳'},
                {id: 3, user: '王五', content: '哈哈 凉席'},
                {id: 4, user: '赵六', content: '哈哈 砖头'},
                {id: 5, user: '田七', content: '哈哈 山炮'}
            ]
        }
    }

    render(){
        return <div>
            <h1 style = {{color : 'red', fontSize: '35px', zIndex: 3, fontWeight : 200, textAlign: 'center'}}>这是评论区列表组件</h1>
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}