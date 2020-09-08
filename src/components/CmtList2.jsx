import React from 'react'


//导入 列表组件 所需要的样式表

//样式表是不是只在List组件生效？
//直接导入的cssoj默认是全局上，整个项目都生效
//Vue组件中的样式表，也有冲突的问题，但是，可以使用<style scoped></style>指令来解决
//react中没有指令的概念
import cssobj from '@/css/cmtlist.scss'

console.log(cssobj);//空对象，没有向外暴露成员

//如果已安装到了 node_modules，则可以不写node
//直接包名引入自己的样式表和模块

//自定义 第三方样式表以css结尾， 不用为普通的css启动模块化
//自己的样式表scss和less结尾，只为其启动模块化
import 'bootstrap/dist/css/bootstrap.css'

// console.log(bootcss);
//导入评论项子组件
import CmtItem from '@/components/CmtItem2'


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
            {/* <h1 className={cssobj.title} className="teast">这是评论区列表组件</h1> */}
            <h1 className={cssobj.title}>这是评论区列表组件</h1>

            {/* <button className={[bootcss.btn, bootcss['btn-primary']].join(' ')}>按钮</button> */}
            <button className="btn btn-primary">按钮</button>
            <div className="panel panel-primary"></div>
            {/* {}绑定 */}
            {/* <h1 className={[cssobj.title ,' test'].join(' ')}>这是评论区列表组件</h1> */}
            {/* 字符串 */}

            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}