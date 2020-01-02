import Taro, { Component } from '@tarojs/taro';
import { View, Slider, Button } from '@tarojs/components';

export default class  extends Component{
  config={

  };

  constructor(){
    super(...arguments);
    this.state = {
      screen:''
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  changeLight(e){
    let screenLightVal = parseFloat(e.detail.value).toFixed(1);
    //设置当前屏幕亮度
    Taro.setScreenBrightness({
      value:screenLightVal
    })
    Taro.getScreenBrightness({
      success:(res) => {
        this.setState({
          screen:res.value
        });
      }
    })
  };

  //锁定屏幕亮度
  keepScreen(){
    let params = {
      keepScreenOn:true
    }
    Taro.setKeepScreenOn(params).then(res => {
      Taro.showToast({
        title:'锁定成功'
      })
    })
  }

  render() {
    return(
      <View>
        <Slider min='0' max='1' step='0.1' onChange={this.changeLight.bind(this)} />
        <View>屏幕亮度：{ this.state.screen }</View>
        <Button onClick={this.keepScreen.bind(this)}>确定亮度</Button>
      </View>
    )
  }
}
