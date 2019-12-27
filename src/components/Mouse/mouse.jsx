import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

export default class extends Component{
  constructor(props){
    super(...arguments);
    this.state = {
      x:0,
      y:0
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };
  handleClick = e => {
    this.setState({
      x:e.detail.x,
      y:e.detail.y
    });
  }

  render() {
    return(
      <View>
        mouse
        <View style={{ height:'100%' }} onClick={this.handleClick}>
          { this.props.renderCat(this.state) }
        </View>
      </View>
    )
  }
}
