import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import '@tarojs/async-await';
import models from './models';
import dva from './dva';

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
  initialState:{},
  models:models,
  onError(e,dispatch){
    //dispatch(action("sys/error", e));
  }
});
const store = dvaApp.getStore();


class App extends Component {
  dispatch = dvaApp.dispatch;
  config = {
    pages: [
      'pages/scrollTop/scrollTop2',
      'pages/imageNews/imageNews',
      'pages/cameraPerson/cameraPerson',
      'pages/cameraPerson/takePhoto',
      'pages/cameraPerson/showPhoto',
      'pages/font/font',
      'pages/playMusic/playMusic',
      'pages/record/record',
      'pages/controlKey/controlKey',
      'pages/refresh/refresh3',
      'pages/refresh/refresh2',
      'pages/refresh/refresh1',
      'pages/nav/nav1',
      'pages/nav/nav2',
      'pages/nav/nav3',
      'pages/interactive/interactive',
      'pages/animation/animation',
      'pages/app/app',
      'pages/file/file',
      'pages/systemInfo/systemInfo',
      'pages/userCaptureScreen/userCaptureScreen',
      'pages/scanCode/scanCode',
      'pages/scanCode/createScan',
      'pages/addPhoneContact/addPhoneContact',
      'pages/compass/compass',
      'pages/keepScreenOn/keepScreenOn',
      'pages/clipboard/clipboard',
      'pages/deviceDirection/deviceDirection',
      'pages/myRef/myRef',
      'pages/refControl/refControl',
      'pages/renderPropsControl/renderPropsControl',
      'pages/childrenControl/childrenControl',
      'pages/functionControl/functionControl',
      'pages/openDataControl/openDataControl',
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
    tabBar: {
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './assets/images/icon_1.png',
          selectedIconPath: './assets/images/icon_11.png'
        },
        {
          pagePath: 'pages/about/about',
          text: '关于',
          iconPath: './assets/images/icon_2.png',
          selectedIconPath: './assets/images/icon_22.png'
        }
      ]
    },
    debug: false,
    networkTimeout: {
      request: 10000,
      uploadFile: 10000
    },
    permission: {
      'scope.userLocation': {
        desc: '你的位置信息将用于小程序位置接口的效果展示'
      }
    },
    requiredBackgroundModes: ['audio']
  };

  globalData = {
    loginType: 'tom',
    userInfo: {
      age: 18
    }
  };

  componentDidMount() {
    Taro.onPageNotFound(res => {
      Taro.showToast({
        title:'访问的页面不存在，即将进入首页',
        icon:'none',
        success(){
          setTimeout(() => {
            Taro.switchTab({url:'pages/home'})
          },1000)
        }
      })
    })
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store} />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
