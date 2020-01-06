import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';

export default class  extends Component{
  /**
   * 点击左上角的箭头回退符是关闭当前页面，并激活之前的页面
   * 关闭页面不会调用hide事件
   * 激活页面会调用hide事件
   */
  config={
    navigationBarTitleText:'nav导航与交互'
  };

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

  goto(){
    /*
    Taro.redirectTo({
      url:'./nav2'
    });
     */
    Taro.navigateTo({
      url:'./nav2'
    })
  };

  //动态设置导航栏
  setNavBarTitle(){
    //导航栏加载动画
    Taro.showNavigationBarLoading();
    //设置导航栏的动态 颜色
    //frontColor：前景色（按钮，标题，状态栏）
    let params = {
      frontColor:'#ffffff',
      backgroundColor:'#ccc',
      success(res){
        console.log('导航栏颜色改变');
      }
    }
    Taro.setNavigationBarColor(params);

    Taro.setNavigationBarTitle({
      title:'新导航栏',
    }).then(res => console.log('改变完成')).catch(err => console.log('改变失败'))

    setTimeout(() => {
      Taro.hideNavigationBarLoading()
    },1500)
  };

  //滚动
  scroll(){
    Taro.pageScrollTo({
      scrollTop:0,
      duration:300
    })
  }

  render() {
    return(
      <View>
        <Button onClick={this.goto.bind(this)}>Nav1跳转</Button>
        <Button onClick={this.setNavBarTitle}>导航栏的设置</Button>
        <Button onClick={this.scroll}>回到最上面</Button>
      </View>
    )
  }
}
