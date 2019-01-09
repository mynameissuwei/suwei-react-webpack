import React from 'react'
import MyComponent from './MyComponent/MyComponent.jsx'

export default <MyComponent/>  // 如果默认抛出的是 export default MyComponent  ， 服务端就不会得到html的内容 , 应该抛出 <MyComponent/>2