import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

export default class  extends Component{
  config={

  };

  constructor(){
    super(...arguments);
    this.state = {
      content:'taro剪切板api'
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };
  copy(){
    Taro.setClipboardData({
      data:this.state.content,
      success(res){
        Taro.showToast({
          title:'提示',
          content:'成功复制',
          showCancel:false
        })
      }
    })
  };

  show(){
    Taro.getClipboardData({
      success(res){
        console.log(res.data);
      }
    })
  }

  render() {
    return(
      <View>
        <Text>{ this.state.content }</Text>
        <Button onClick={this.copy.bind(this)}>一键复制</Button>
        <Button onClick={this.show.bind(this)}>展示</Button>
      </View>
    )
  }
}
