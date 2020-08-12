// console.log('Hello World!');
import React from 'react'
import ReactDOM from 'react-dom'

//导入Hello文件
//默认，如果不做单独配置的话，不能省略.jsx
import Hello from '@/components/Hello'
//@表示项目根目录的src这一层目录


const dog = {
    name:'大黄',
    age : 3,
    gender : '雄'
}

// const myh1=React.createElement('h1',{id:'myh1',title:'this is a h1'},'这是一个大大的h1')

// const mydiv=React.createElement('div',null,'这是一个div元素', myh1)

//const mydiv = <div id="mydiv" title="div aaa">这是一个div元素</div>

let a = 10//渲染数字
//Vue{{}}

let str = 'Hello, World!'
//渲染字符串

let boo = true
//渲染布尔值

let title = '999' //为属性绑定值

const h1 = <h1>哈哈哈哈哈</h1>//渲染jsx元素

const arr = [//渲染jsx元素数组
    <h2>这是h2</h2>,
    <h3>这是h3</h3>
]

const arrStr = ['毛利', '柯南', '张起灵', '吴邪', '胖子']
//

//定义一个空数组，将来用来存放名称标签
const nameArr = []
//注意：react中需要把key添加给被foreach map for循环直接控制的元素
arrStr.forEach(item =>{
const temp = <h5 key={item}>{item}</h5>
nameArr.push(temp)
})


//数组map方法，map中必须具有return
var res = arrStr.map(item =>{
    return item + '~~'
})
console.log(res)
//3、调用render函数渲染，jsx SML比HTML严格得多
//当需要JSX控制的区域内，写一些JS表达式，则需要{}
ReactDOM.render(<div>
    {/* 直接以标签形式置于界面上 */}
    <Hello{...dog}></Hello>
    <hr />
    {a + 2}
    <hr/>
    {str}
    <hr/>
    {boo?'条件为真':'条件为假'}
    <hr/>
    <p title = {title}>这是p标签</p>
    <hr/>
    {h1}
    <hr/>
    {/* {arr} */}
    {
        //这是注释
    }
    <hr/>
    {nameArr}
    <hr />
    {arrStr.map(item =>  <div key={item}><h3>{item}</h3></div>)}
    <hr />
    <p className="mystyle"> !!! </p>
    <label htmlFor="ooo"></label>
    </div>, document.getElementById('app'))