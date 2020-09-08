// console.log('Hello World!');
import React from 'react'
import ReactDOM from 'react-dom'

//导入评论项子组件
import CmtList from '@/components/CmtList2'




ReactDOM.render(<div>
    {/*在jsx中，不允许通过style设置字符串的值 来设置 行内样式*/}
    {/*示例：style = {{color : 'red}} */}
    {/*在 行内样式 中，数值类型的样式不用单引号，字符型的必须单引号 */}

<CmtList></CmtList>
</div>, document.getElementById('app'))