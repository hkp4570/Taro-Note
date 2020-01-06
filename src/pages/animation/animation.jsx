import Taro, { Component } from '@tarojs/taro';
import { View,Button,Image } from '@tarojs/components';
import './animation.less';
export default class  extends Component{
  constructor(props){
    super(props);
    this.state = {
      viewAnimate:'',
      start:'上海',
      end:'北京',
      lAnimate:'',
      rAnimate:''
    }
  };

  componentWillMount() {
  };

  componentDidMount() {

  };

  componentWillUnmount() {
  };
  //按钮事件源
  startMove(){
    let animationObj = Taro.createAnimation({
      duration:400,
      timingFunction:'ease',
      delay:0
    })
    //由对象安排动画效果
    animationObj.translateX(100).opacity(0.1).width(200).step();
    //设置到state中的执行变量
    this.setState({
      viewAnimate:animationObj.export() //执行动画
    });
  };

  //城市转换触发
  trigger(){
    let vm = this;
    let option = {
      duration: 100,
      timingFunction: 'ease-in'
    }
    //创建动画执行对象
    let lanimation = Taro.createAnimation(option);
    let ranimation = Taro.createAnimation(option);
    //定起点
    lanimation.translateX(100).opacity(0.1).step();
    //定终点
    ranimation.translateX(-100).opacity(0.1).step();
    //执行动画
    vm.setState({
      lAnimate:lanimation.export(),
      rAnimate:ranimation.export()
    });

    setTimeout(() => {
      //定起点
      lanimation.translateX(0).opacity(1).step();
      //定终点
      ranimation.translateX(0).opacity(1).step();
      //两个state变量交换
      let temp = vm.state.start;
      vm.setState({
        lAnimate:lanimation.export(),
        rAnimate:ranimation.export(),
        end:temp,
        start:vm.state.end
      })
    },500)
  }

  render() {
    return(
      <View>
        <View className='animate-view' animation={this.state.viewAnimate} />
        <Button onClick={this.startMove}>开始动画</Button>
        <View>城市切换</View>
        <View className='animation'>
          <View className='dis-flex'>
            <View className='flex3' animation={this.state.lAnimate}>{this.state.start}</View>
            <View className='flex1' onClick={this.trigger}>
              <Image className='img' src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=440855050,1348081528&fm=26&gp=0.jpg' />
            </View>
            <View className='flex3' animation={this.state.rAnimate}>{this.state.end}</View>
          </View>
        </View>
      </View>
    )
  }
}
