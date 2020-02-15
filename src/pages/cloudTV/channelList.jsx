import Taro,{Component} from '@tarojs/taro';
import { View } from '@tarojs/components';
import './channelList';

export default class extends Component{
  config={
    navigationBarTitleText:''
  };
  constructor(props){
    super(props);
    this.state={

    }
  };
  componentDidShow(){
    console.log(this.$router.params);
  };
  render(){
    return(
      <View>
        channelList
      </View>
    )
  }
}