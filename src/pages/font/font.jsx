import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import './font.less';

export default class extends Component{
 config={
    navigationBarTitleText:'加载新字体'
  };
  constructor(props){
    super(props);
    this.state = {
      loaded:false,
      fontFamily: 'Bitstream Vera Serif Bold'
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  //加载字体
  loadFontFace(){
    let that = this;
    //微信的显示接口  Taro的隐士接口
    Taro.loadFontFace({
      family:this.state.fontFamily,
      source:'url("https://sungd.github.io/Pacifico.ttf")',
      success(res){
        console.log(res);
        that.setState({
          loaded:true
        })
      },
      fail(err){
        console.log(err);
      }
    })
  }

  render() {
    return(
      <View>
        <View className='title'>font-wx</View>
        <View className='page-section'>
          <View className={`page-body-info display-area ${this.state.loaded ? 'font-loaded' : ''}`}>
            {
              !this.state.loaded ?
               ( <Text>load:{this.state.fontFamily}</Text>) :
                ( <Text>{this.state.fontFamily} is loaded</Text> )
            }
          </View>
        </View>
        <View className='btn-area'>
          <Button type='primary' onClick={this.loadFontFace.bind(this)}>加载字体</Button>
        </View>
      </View>
    )
  }
}
