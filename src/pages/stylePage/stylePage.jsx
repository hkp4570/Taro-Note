import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import InhertStyle from '../../components/InhertStyle/index';
import './stylePage.less'
export default class extends Component{
  render() {
    return(
      <View>
        我是父组件
        <InhertStyle loadingStatus='no-more' my-class='red-text' />
      </View>
    )
  }
}
