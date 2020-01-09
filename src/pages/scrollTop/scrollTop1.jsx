import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './scrollTop1.less';
export default class  extends Component{
 config={

  };
  constructor(props){
    super(props);
    this.state = {
      showBtn:true
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  onPageScroll(e) {
    if(e.scrollTop > 100){
      this.setState({
        showBtn:false
      });
    }else{
      this.setState({
        showBtn:true
      });
    }
  }

  goTop(){
    //判断系统是否支持此功能
    if(Taro.pageScrollTo){
      Taro.pageScrollTo({
        scrollTop:0,
        duration:500
      }).then(() => {console.log('滚动到顶部')}).catch(() => { console.log('未完成此操作') })
    }else{
      Taro.showToast({
        title:'系统不支持',
        icon:'none'
      })
    }
  }

  render() {
    return(
      <View>
        <View className='page'>
          <Text>top</Text>
        </View>
        <View className='gotop' hidden={this.state.showBtn}>
          <View onClick={this.goTop}>回到顶部</View>
        </View>
      </View>
    )
  }
}
