import Taro, { Component } from '@tarojs/taro';
import { View, Input } from '@tarojs/components';

/**
 * 小程序和h5获取ref的方式不同，
 * 所有需要先判断当前的环境是小程序还是h5
 */
export default class extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  };

  componentWillMount() {
  };

  componentDidMount() {
    //判断当前环境是小程序还是h5
    if(process.env.TARO_ENV === 'weapp'){
      console.log('weapp');
      console.log(this.refs.myInput);
    }else if(process.env.TARO_ENV === 'h5'){
      console.log('h5');
    }
  };

  componentWillUnmount() {
  };

  render() {
    return(
      <View>
        <Input ref='myInput' />
      </View>
    )
  }
}
