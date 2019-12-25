import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

export default class extends Component{
  constructor(){
    super(...arguments)
  }
  //全局样式类，组件内使用className直接使用外部定义的样式
  static options = {
    addGlobalClass:true
  };
  // static externalClasses = ['my-class'];

  /*
  * <View className='my-class'>
  * 我是子组件
  * </View>
  * */
  render() {
    const { loadingStatus } = this.props;
    return(
      <View className='red-text'>
        我是子组件
        {
          {
            'loading':'加载中',
            'fail':<View>加载失败</View>,
            'no-more':'没有更多了'
          }[loadingStatus]
        }
      </View>
    )
  }
}
