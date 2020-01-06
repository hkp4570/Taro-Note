import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';

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

  goto(){
    Taro.navigateTo({
      url:'./nav3'
    })
  };

  goBack(){
    Taro.navigateBack()
  }

  render() {
    return(
      <View>
        <Button onClick={this.goto.bind(this)}>Nav2跳转</Button>
        <Button onClick={this.goBack}>回退</Button>
      </View>
    )
  }
}
