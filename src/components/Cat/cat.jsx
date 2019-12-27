import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

export default class  extends Component{
  constructor(){
    super(...arguments);
    this.state = {

    }
  };
  static defaultProps = {
    mouse:{
      x:0,
      y:0
    }
  }
  miao(){
    console.log('miao miao miao');
  }

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  render() {
    console.log(this.props);
    const { mouse } = this.props;
    return(
      <View>
        <Image
         src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2209846807,1303693616&fm=26&gp=0.jpg'
         style={{ position:'absolute',left:mouse.x,top:mouse.y }}
         />
      </View>
    )
  }
}
