//假设main.js还是入口文件
//console.log('ok');
//webpack-dev-server 打包好的main.js是托管到了内存中，所以在项目中看不到
//but我们可以认为，在项目根目录中，有一个看不到的main.js

//这两个导入的时候，接受成员名称，必须这么写

import React from 'react'//创建组件和虚拟DOM元素，生命周期

var ReactDOM = require('react-dom');//创建好的组件和虚拟DOM放到页面上展示的

//创建虚拟DOM元素
//参数1：创建的元素，字符串，表示元素的名称
//参数2：是一个对象或null，表示当前这个DOM元素的属性
//参数3：子节点（包括其他虚拟DOM，获取文本子节点）
//参数n，其他子节点
// <h1 id="myh1" title="This is a h1"> 这是一个测试 </h1>
// const myh1 = React.createElement('h1',null,'这是一个测试')
const myh1 = React.createElement('h1',{id:'myh1', title:'This is a h1'},'这是一个测试')//JS对象

const mydiv = React.createElement('div', null, '这是一个div元素', myh1)


//渲染页面上的DOM结构就是写HTML代码

//使用ReactDOM把虚拟DOM渲染到页面上
//参数1：要渲染的那个虚拟DOM元素
//参数2：指定页面上DOM一个容器
ReactDOM.render(mydiv, document.getElementById("app"));//渲染
//Target container is not a DOM element
//第二个参数应该是接受的一个DOM元素，而不是一个选择器