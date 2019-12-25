import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './index.less';

import Dialog from "../../components/Dialog";

//定义一个全局js文件存储全局数据
import { setGlobalData,getGlobalData } from '../../global';

//获取全局定义的数据,直接在app.jsx中定义
const app = Taro.getApp();
export default class Index extends Component {

  config = {
    navigationBarTitleText: 'Taro',
    enablePullDownRefresh:true,
    onReachBottomDistance:50
  };
  constructor(props){
    super(props);
    this.state = {
      loading:'还有内容',
      switch:false
    }
  }

  onPullDownRefresh() {
    console.log('页面下拉刷新事件');
    //停止下拉刷新事件
    wx.stopPullDownRefresh();
  }

  onReachBottom(){
    console.log('上拉触底事件');
    this.setState({
      loading:'加载中。。。',
      flag:false
    });
  }

  onPageScroll(e){
    // console.log(e.scrollTop);
  }

  onShareAppMessage(e){
    let _title = 'Menu分享Taro学习站';
    if(e.from === 'button'){
      _title = 'button分享Taro学习站';
    }
    return{
      title:_title,
      path:'/pages/index/index',
      imageUrl:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3381573685,1866477444&fm=26&gp=0.jpg'
    }
  }

  componentWillMount () {
    console.log('willMount');
    console.log(app.globalData.loginType);
    setGlobalData('loginName','sunny');
  }

  componentDidMount () {
    console.log('DidMount');
    console.log(getGlobalData('loginName'));
  }

  componentWillUnmount () {
    console.log('willUnmount');
  }

  componentDidShow () {
    console.log('didShow');
  }

  componentDidHide () {
    console.log('didHide');
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('willupdate',nextState);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('didupdate',prevState);
  }

  handleClick () {
    Taro.navigateTo({
      url:'/pages/center/center?from=index'
    });
    this.setState({
      switch:!this.state.switch
    });
  };

  /**
   * 可以跳转到tabBar的页面，但是不可以传参数，目标页面取不到该参数
   */
  jumpTabBar () {
    Taro.switchTab({
      url:'/pages/about/about?from=index'
    })
  };

  onTabItemTap () {
    console.log('tabBar被点击了');
  }

  changeData(){
    this.setState({
      flag:!this.state.flag,
    });
  }


  render () {
    let myName;
    if(this.state.flag){
      myName = 'sunny';
    }else{
      myName = 'check'
    }
    return (
      <View className='index'>
        <Dialog myName={myName} >
          <Button onClick={() => this.changeData()}>按钮</Button>
        </Dialog>
        <Button onClick={() => this.handleClick()}>
          {'数据更新：' + this.state.switch}
        </Button>
        <Button onClick={() => this.jumpTabBar()}>跳转tabBar页面</Button>
        <Button id='myBtn' data-name='Taro学习站' openType='share'>转发</Button>
        <Button onClick={() => Taro.navigateTo({url:'/pages/stylePage/stylePage'})}>父组件中定义的样式给到子组件,枚举条件渲染</Button>
        <View className='loading'>{this.state.loading}</View>
      </View>
    )
  }
}
