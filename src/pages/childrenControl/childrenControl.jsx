import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Dialog from '../../components/Dialog/index';

export default class extends Component{
  constructor(){
    super(...arguments);
    this.state = {

    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  render() {
    return(
      <View>
        <Dialog renderHeader={
          <View>这是自定义的头部</View>}
                renderFooter={
                  <View>这是自定义的尾部</View>
                }
        >
          <View>this is a dialog</View>
        </Dialog>
      </View>
    )
  }
}
