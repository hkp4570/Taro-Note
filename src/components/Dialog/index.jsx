import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

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
        <View>
          { this.props.renderHeader }
        </View>
        <View>
          { this.props.children }
        </View>
        <View>
          { this.props.renderFooter }
        </View>
      </View>
    )
  }
}
