import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Mouse from '../../components/Mouse/mouse';
import Cat  from '../../components/Cat/cat';

export default class extends Component{
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

  render() {
    return(
      <View>
        <Mouse renderCat={(mouse) => <Cat mouse={mouse} />}/>
      </View>
    )
  }
}
