import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

export default class extends Component{
  constructor(props){
    super(props);
    this.state = {
      screen:'正面',
      alpha:0
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
    Taro.onDeviceMotionChange(res => {
      let alpha = parseFloat(res.alpha);
      if(alpha > 170 && alpha < 220){
        this.setState({screen:'左侧'});
      }else if(alpha > 10 && alpha < 50){
        this.setState({screen:'右侧'});
      }else if(alpha > 120 && alpha < 140){
        this.setState({screen:'反面'});
      }else{
        this.setState({screen:'正面'});
      }
      this.setState({
        alpha:alpha
      });
    })
  };

  componentWillUnmount() {
  };
  startScreenClick() {
    Taro.startDeviceMotionListening({
      success:(res) => {
        console.log('start',res);
      }
    })
  };
  endScreenClick() {
    Taro.stopDeviceMotionListening({
      success:(res) => {
        console.log('end',res);
      }
    })
  };

  render() {
    return(
      <View>
        <View>
          屏幕朝向
          <Text>{this.state.screen}</Text>
        </View>
        {/* alpha number 当手机坐标 x/y 和地球 x/y 重合时，绕着Z中转动的夹角alpha，范围取值为[0,2*PI), 逆时针转动为正*/}
        <View>当前的alpha：{this.state.alpha}</View>
        <Button type='primary' onClick={this.startScreenClick.bind(this)}>开始监听</Button>
        <Button type='primary' onClick={this.endScreenClick.bind(this)}>结束监听</Button>
      </View>
    )
  }
}
