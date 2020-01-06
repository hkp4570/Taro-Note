import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import {login} from "@tarojs/taro-quickapp/src/api/unsupportedApi";

export default class  extends Component{
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

  actionShowToast(){
    //如果有image会覆盖掉icon
    let params = {
      title:'showToast',
      icon:'success',
      duration:5000,
      mask:true,
      // image:''
      success(){
        console.log('提示完成');
      },
      fail(){
        console.log('提示失败');
      },
      complete(){
        console.log('提示结束');
      }
    }
    Taro.showToast(params);

    setTimeout(() => {
      Taro.hideToast()
    },2000)
  };

  actionShowLoading(){
    Taro.showLoading({
      title:'显示内容',
      mask:false,
      success(){
        console.log('提示完成');
      },
      fail(){
        console.log('提示失败');
      },
      complete(){
        console.log('提示结束');
      }
    })

    setTimeout(() => {
      Taro.hideLoading();
    },2000)
  };

  actionShowModal(){
    Taro.showModal({
      title:'提示',
      content:'showModal内容中写多少个字都可以',
      showCancel:true,
      cancelText:'我不要了',  //最多4个字符
      confirmText:'我知道了', //做多4个字符
      cancelColor:'#f00',
      confirmColor:'#f40',
      success(res){
        console.log(res);
      },
      fail(res){
        console.log(res);
      }
    })
  };

  actionShowActionSheet(){
    let params = {
      itemList:['html','css','javascript','react'],
      itemColor:'#f40'
    }
    Taro.showActionSheet(params)
      .then(res => {
        console.log(res);
      }).catch(err => console.log(err))
  }


  render() {
    return(
      <View>
        <View>导航与交互</View>
        <View>
          <View>showToast</View>
          <Button type='primary' onClick={this.actionShowToast.bind(this)}>showToast</Button>
        </View>
        <View>
          <View>showLoading</View>
          <Button type='primary' onClick={this.actionShowLoading.bind(this)}>showLoading</Button>
        </View>
        <View>
          <View>showModal：{this.state.showModal}</View>
          <Button onClick={this.actionShowModal}>showModal</Button>
        </View>
        <View>
          <View>showActionSheet菜单操作：{this.state.choose}</View>
          <Button onClick={this.actionShowActionSheet}>showActionSheet</Button>
        </View>
      </View>
    )
  }
}
