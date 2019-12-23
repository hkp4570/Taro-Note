import Taro,{Component} from '@tarojs/taro';
import { View,Text } from '@tarojs/components';

export default class About extends Component{
  config = {
    navigationBarTitleText:'关于'
  };
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render() {
    return(
      <View>
        <Text>About</Text>
      </View>
    )
  }
}
