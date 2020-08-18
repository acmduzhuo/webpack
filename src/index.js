// console.log('Hello World!');
import React from 'react'
import ReactDOM from 'react-dom'

//导入评论项子组件
import CmtItem from '@/components/CmtItem'
import CmtList from './components/CmtList'




ReactDOM.render(<div>
<h1>这是评论区列表组件</h1>

<CmtList></CmtList>
</div>, document.getElementById('app'))