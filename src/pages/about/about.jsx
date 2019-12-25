import Taro, { Component } from '@tarojs/taro';
import { View,Text,Button } from '@tarojs/components';
import Clock from '../../components/Colck';

export default class About extends Component{
  config = {
    navigationBarTitleText:'关于'
  };
  constructor(){
    super();
    this.state = {
      flag:false
    }
  };

  componentWillMount () {
    console.log(this.$router.params);
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleOpen(name,e){
    console.log(name,e);
    e.stopPropagation();
    this.setState({
      flag:true,
    });
  }

  handleClose(name,e){
    console.log(name,e);
    e.stopPropagation();
    this.setState({
      flag:false,
    });
  };

  handleJump(){
    Taro.navigateTo({
      url:'/pages/center/center?id=1001&name=jerry'
    })

    // Taro.redirectTo({
    //   url:'/pages/center/center'
    // })

    // wx.navigateTo({
    //   url:'/pages/center/center'
    // })
  }



  render() {
    return(
      <View>
        <Clock />
        <Button onClick={this.handleOpen.bind(this,'open')}>开</Button>
        <Button onClick={this.handleClose.bind(this,'close')}>关</Button>
        { this.state.flag ? '开' : '关' }
        <Button onClick={() => this.handleJump()}>跳转传值</Button>
      </View>
    )
  }
}
