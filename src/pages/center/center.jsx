import Taro, { PureComponent } from '@tarojs/taro';
import { View, Navigator } from '@tarojs/components';

export default class Center extends PureComponent{
  config = {

  };

  componentWillMount() {
    console.log(this.$router.params);
  }

  render() {
    return(
      <View>
        <Navigator target='self' open-type='navigateBack' delta='2'>回退</Navigator>
      </View>
    )
  }
}
