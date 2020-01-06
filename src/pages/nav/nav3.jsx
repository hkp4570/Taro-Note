import Taro, { Component } from '@tarojs/taro';
import { View,Button } from '@tarojs/components';

export default class  extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  //获取页面栈
  getCurrentPages(){
    console.log(Taro.getCurrentPages());
    console.log(Taro.getCurrentPages().length);
  }


  render() {
    return(
      <View>
        <Button onClick={this.getCurrentPages}>获取页面栈</Button>
      </View>
    )
  }
}
