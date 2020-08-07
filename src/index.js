// console.log('Hello World!');
import React from 'react'
import ReactDOM from 'react-dom'

// const myh1=React.createElement('h1',{id:'myh1',title:'this is a h1'},'这是一个大大的h1')

// const mydiv=React.createElement('div',null,'这是一个div元素', myh1)

const mydiv = <div id="mydiv" title="div aaa">这是一个div元素</div>

ReactDOM.render(mydiv, document.getElementById('app'))