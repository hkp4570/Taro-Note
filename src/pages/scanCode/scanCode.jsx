import Taro, { Component } from '@tarojs/taro';
import { View, Button,navigateTo } from '@tarojs/components';

export default class  extends Component{
  config={

  };

  constructor(){
    super(...arguments);
    this.state = {
      scanType:{
        'WX_CODE':'微信小程序',
        'QR_CODE':'二维码',
        'EAN_8':'条形码(EAN_8)',
        'EAN_13':'条形码(EAN_13)'
      },
      scanResult:{
        isShow:false,
        type:'',
        text:'',
        msg:''
      }
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  onScan(){
    Taro.scanCode({
      success:res => {
        console.log('res:',res);
        let msg = res.rawData;
        if(res.scanType === 'WX_CODE' && res.result === ''){
          msg = '您扫了微信二维码';
        }
        this.setState({
          scanResult:{
            isShow:true,
            type:this.state.scanType[res.scanType],
            text:res.result,
            msg,
          }
        },()=>{
          console.log(this.state.scanResult);
        });
      }
    })
  }

  onCopy(){
    Taro.setClipboardData({
      data:this.state.scanResult.text,
      success:res => {
        Taro.showToast({
          title:'复制成功',
          icon:'success',
          duration:2000
        })
      }
    })
  }

  gotoCreateScan(){
    Taro.navigateTo({
      url:'/pages/scanCode/createScan'
    })
  }

  render() {
    return(
      <View>
        {/*扫码结果*/}
        <View style={ 'display:' + (this.state.scanResult.isShow ? 'block' : 'none') }>
          <View>扫码结果</View>
          <View>类型：{ this.state.scanResult.type }</View>
          <View>内容：{ this.state.scanResult.text }</View>
        </View>
        {/*复制内容*/}
        <View style={ 'display:' + (this.state.scanResult.isShow ? 'block' : 'none') }>
          <Button onClick={this.onCopy}>复制</Button>
        </View>
        {/*扫码按钮*/}
        <View>
          <Button onClick={this.onScan}>扫一扫</Button>
          <Button onClick={this.gotoCreateScan}>生成二维码</Button>
        </View>
      </View>
    )
  }
}
