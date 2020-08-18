// console.log('Hello World!');
import React from 'react'
import ReactDOM from 'react-dom'
//import '@/07.class的实例方法和静态方法'

//导入impor继承
// import '@/class03.继承-公共方法'



//class关键字创建组件 有状态组件
//如果使用 class 定义组件，必须 让自己的组件，继承为React.Component
class Movie extends React.Component{

    //构造器
    constructor(){
        //由于Movie组件，继承了React.Component这个父类，所以在在自定义的构造器中，必须调用super
        super()
        this.state = {//可读可写
            msg: '大家好，我是class组件创建的Movie组件'
        }
    }
    //必须具有render函数作用，渲染当前组件对应的虚拟DOM结构
    //render函数的作用，是 渲染 当前组件对应的 虚拟DOM元素
    render(){
        //render 函数中，必须返回合法的JSX虚拟DOM结构


        //this.props.name = '李四' 
        //无论是class还是function创建的组件，props都是只读的，不能被赋值

    
    //在 class 关键字创建的组件中，如果想使用外界传递过来的 props 参数，直接通过this.props.***即可
    
    //在class创建的组件中，this.state中的数据都是可读可写的
    this.state.msg = 'msg的值被我修改了'
    return <div>
        {/*注意 在 class 组件内部，this 表示 当前组件的实例对象*/}
        这是Movie的组件--{this.props.name} -- {this.props.age}--{this.props.gender}
        <h3>{this.state.msg}</h3>
        </div>
        //return null  //也可以为null
    }
}

const user = {
    name :  '小明',
    age : 22,
    gender :'男'
}

ReactDOM.render(<div>
123
<hr />
{/*这里的Movie标签，其实就是Movie类的一个实例对象*/}

<Movie{...user}>

</Movie>
</div>, document.getElementById('app'))