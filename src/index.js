// console.log('Hello World!');
import React from 'react'
import ReactDOM from 'react-dom'
//import '@/07.class的实例方法和静态方法'

//导入impor继承
// import '@/class03.继承-公共方法'



//class关键字创建组件
//如果使用 class 定义组件，必须 让自己的组件，继承为React.Component
class Movie extends React.Component{
    //必须具有render函数作用，渲染当前组件对应的虚拟DOM结构
    //render函数的作用，是 渲染 当前组件对应的 虚拟DOM元素
    render(){
        //render 函数中，必须返回合法的JSX虚拟DOM结构
        return <div>这是class创建的组件</div>;
        //return null  //也可以为null
    }
}

ReactDOM.render(<div>
123
<hr />
<Movie></Movie>
</div>, document.getElementById('app'))