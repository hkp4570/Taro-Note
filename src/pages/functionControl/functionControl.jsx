import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Welcome from '../../components/FunctionComp/welcome';
import ClassFunc from '../../components/FunctionComp/index';
export default class  extends Component{
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
        <Welcome name='Jerry' />
        <ClassFunc header ='tom' footer='footer' />
      </View>
    )
  }
}
