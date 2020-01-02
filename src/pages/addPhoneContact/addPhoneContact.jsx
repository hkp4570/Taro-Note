import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input, Button } from '@tarojs/components';

export default class extends Component{
  config={

  };

  constructor(){
    super(...arguments);
    this.state = {
      name:'',
      phone:'',
      compPhone:'',
      network:'强'
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  //在此函数中监听网络状态改变
  componentDidShow() {
    Taro.onNetworkStatusChange(res => {
      console.log(res);
    })
  }

  getName(e){
    this.setState({
      name:e.detail.value
    });
  };
  getPhone(e){
    this.setState({
      phone:e.detail.value
    });
  };
  getCompPhone(e){
    this.setState({
      compPhone:e.detail.value
    });
  };
  // 添加联系人事件操作
  addPhoneContact(){
    Taro.addPhoneContact({
      firstName:this.state.name,
      mobilePhoneNumber:this.state.phone,
      hostNumber:this.state.compPhone,
      success:(res) => {
        console.log('success',res);
      }
    })
  };

  getNetwork(){
    Taro.getNetworkType({
      success:res => {
        let type = res.networkType;
        let netWorkDesc = '强';
        if(type === 'wifi' || type === '4g'){
          netWorkDesc = '强'
        }else if(type === '3g' || type === '2g'){
          netWorkDesc = '弱'
        }else{
          netWorkDesc = '无'
        }
        this.setState({
          network:netWorkDesc
        });
      }
    })
  }

  render() {
    return(
      <View>
        <Text>姓名:</Text>
        <Input placeholder='请输入用户姓名' onInput={this.getName.bind(this)}/>
        <Text>手机:</Text>
        <Input placeholder='请输入用户手机' onInput={this.getPhone.bind(this)}/>
        <Text>公司电话:</Text>
        <Input placeholder='请输入用户公司电话' onInput={this.getCompPhone.bind(this)}/>
        <Button onClick={this.addPhoneContact.bind(this)}>添加到联系人</Button>
        <View>
          <Text>网络获取</Text>
          <View>
            网络强度：
            <Text>{this.state.network}</Text>
          </View>
          <Button onClick={this.getNetwork}>网络获取</Button>
        </View>
      </View>
    )
  }
}
