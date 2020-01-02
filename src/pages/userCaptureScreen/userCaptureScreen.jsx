import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

export default class  extends Component{
  config={

  };

  constructor(){
    super(...arguments);
    this.state = {
      captureScreen:'用户还没有截屏'
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  componentDidShow() {
    //监测用户截屏   截屏后保存触发该事件
    Taro.onUserCaptureScreen(() => {
      this.setState({
        captureScreen:'用户截屏了'
      })
    })
    console.log('用户截屏了');
  }

  render() {
    return(
      <View>
        <View>
          <Text>用户截屏</Text>
          <View>{this.state.captureScreen}</View>
        </View>
      </View>
    )
  }
}
