import Taro, { Component } from '@tarojs/taro'
import About from './pages/about/about'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/mapControl/mapControl',
      'pages/cameraControl/cameraControl',
      'pages/videoControl/videoControl',
      'pages/imageControl/imageControl',
      'pages/navigator/navigator',
      'pages/formComp/formComp',
      'pages/basicControl/basicControl',
      'pages/home/home',
      'pages/index/index',
      'pages/about/about',
      'pages/center/center',
      'pages/stylePage/stylePage'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Taro操作',
      navigationBarTextStyle: 'black',
    },
    tabBar:{
      borderStyle:'black',
      list:[
        {
          pagePath:'pages/index/index',
          text:'首页',
          iconPath:'./assets/images/icon_1.png',
          selectedIconPath:'./assets/images/icon_11.png'
        },
        {
          pagePath:'pages/about/about',
          text:'关于',
          iconPath:'./assets/images/icon_2.png',
          selectedIconPath:'./assets/images/icon_22.png'
        }
      ]
    },
    debug:false,
    networkTimeout:{
      request:10000,
      uploadFile:10000
    },
    permission:{
      'scope.userLocation':{
        desc:'你的位置信息将用于小程序位置接口的效果展示'
      }
    },
    requiredBackgroundModes: ['audio']
  };

  globalData={
    loginType:'tom',
    userInfo:{
      age:18
    }
  };

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <About />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
