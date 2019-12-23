import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less';

//定义一个全局js文件存储全局数据
import { setGlobalData,getGlobalData } from '../../global';


//获取全局定义的数据,直接在app.jsx中定义
const app = Taro.getApp();
export default class Index extends Component {

  config = {
    navigationBarTitleText: 'Taro'
  };

  componentWillMount () {
    console.log('willMount');
    console.log(app.globalData.loginType);
    setGlobalData('loginName','sunny');
  }

  componentDidMount () {
    console.log('DidMount');
    console.log(getGlobalData('loginName'));
  }

  componentWillUnmount () {
    console.log('willUnmount');
  }

  componentDidShow () {
    console.log('didShow');
  }

  componentDidHide () {
    console.log('didHide');
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
