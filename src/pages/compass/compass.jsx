import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import image from '../../assets/images/compass.png'

export default class  extends Component{
  config={

  };

  constructor(){
    super(...arguments);
    this.state = {
      direction:'--',
      angle:'--',
      rotate:0
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  onShareAppMessage(obj) {
    return{
      title:`我现在正面向${this.state.direction}方向`
    }
  }

  componentDidShow() {
    // 开始罗盘的调用
    Taro.onCompassChange(res => {
      let direction = res.direction.toFixed(2);
      let raios = res.direction.toFixed(0);
      this.setState({
        angle:direction,
        rotate:360 - raios,
        direction:this.check(raios)
      });
    })

    /**
     * 手机又罗盘功能会自动执行onCompassChange事件
     * 没有的话就不会执行，所有首先要检查手机是否有罗盘功能
     */

    setTimeout(() => {
      if(this.state.direction === '--' && this.state.angle === '--' ){
        Taro.showToast({
          title:'您手机没有此功能',
          icon:'none',
          duration:4000,
          mask:true
        })
      }
    },3000)
  };

  check(i){
    if(15 < i && i <= 75){
      return '东北'
    }else if(75 < i && i <= 105){
      return '正东'
    }else if(105 < i && i <= 165){
      return '东南'
    }else if(165 < i && i <= 195){
      return '正南'
    }else if(195 < i && i <= 255){
      return '西南'
    }else if(255 < i && i <= 285){
      return '正西'
    }else if(285 < i && i <= 345){
      return '西北'
    }else{
      return '正北'
    }
  }

  render() {
    let styleParams = {
      transform:`rotate(${this.state.rotate}deg)`
    }
    return(
      <View>
        <View>
          <Text>方向：{this.state.direction}</Text>
        </View>
        <View>
          <Text>角度：{this.state.angle}°</Text>
        </View>
        <View>
          <Image src={image} style={styleParams} />
        </View>
      </View>
    )
  }
}
