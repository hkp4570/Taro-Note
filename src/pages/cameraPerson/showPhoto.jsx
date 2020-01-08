import Taro, { Component } from '@tarojs/taro';
import { View,Image } from '@tarojs/components';

export default class  extends Component{
 config={

  };
  constructor(props){
    super(props);
    this.state = {
      photo:''
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
    Taro.getStorage({
      key:'photoPeople',
      success:res => {
        this.setState({
          photo:res.data
        },() => {
          Taro.removeStorage({
            key:'photoPeople',
            success(res){}
          })
        });
      }
    })
  };

  componentWillUnmount() {
  };

  render() {
    return(
      <View className='container'>
        <Image className='showImg' src={this.state.photo} />
      </View>
    )
  }
}
