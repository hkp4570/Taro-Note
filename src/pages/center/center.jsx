import Taro, { PureComponent } from '@tarojs/taro';
import { View } from '@tarojs/components';

export default class Center extends PureComponent{
  config = {

  };

  componentWillMount() {
    console.log(this.$router.params);
  }

  render() {
    return(
      <View>center</View>
    )
  }
}
