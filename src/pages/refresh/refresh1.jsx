import Taro, { Component } from '@tarojs/taro';
import { View,Image,Text } from '@tarojs/components';
import './refresh1.less';

export default class  extends Component{
  config={
    navigationBarTitleText:'刷新操作',
    enablePullDownRefresh:true
  };
  constructor(props){
    super(props);
    this.state = {
      imgUrl:'http://img2.imgtn.bdimg.com/it/u=4121198700,2557653438&fm=26&gp=0.jpg',
      imgTitle:'计算机的发展史'
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  //系统事件，当enablePullDownRefresh设置为true试，会直接出发该事件
  onPullDownRefresh() {
    Taro.showLoading({
      title:'正在加载...'
    });

    setTimeout(() => {
      this.setState({
        imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3833654612,1866622642&fm=26&gp=0.jpg',
        imgTitle:'旧照片的记忆'
      });
      //调用停止事件更新的下拉接口
      Taro.stopPullDownRefresh();
      Taro.hideLoading();
    },2000)
  }

  render() {
    return(
      <View className='container'>
        <View className='page-section'>
          <Image src={this.state.imgUrl} />
          <Text>{this.state.imgTitle}</Text>
        </View>
      </View>
    )
  }
}
