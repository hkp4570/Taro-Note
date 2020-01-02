import Taro, { Component } from '@tarojs/taro';
import { View, Image, Button, Textarea } from '@tarojs/components';

export default class  extends Component{
  config={

  };

  constructor(){
    super(...arguments);
    this.state = {
      codeText:'',
      imgTempFilePath:''
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  bindInput(e){
    if(e.detail.value !== ''){
      this.setState({
        codeText:e.detail.value
      });
    }else{
      Taro.showToast({
        title:'无内容'
      })
    }
  }
  onGenerate(){
    let that = this;
    let onLineScanCodeAPI = `http://qr.topscan.com/api.php?text=${this.state.codeText}`
    Taro.downloadFile({
      url:onLineScanCodeAPI,
      success(res){
        that.setState({
          imgTempFilePath:res.tempFilePath
        })
      }
    })
  }

  render() {
    return(
      <View>
        CreateScan
        {/* 输入框 */}
        <View>
          <Textarea placeholder='请输入二维码文本' onInput={this.bindInput.bind(this)} value='' />
        </View>
        {/* 显示二维码区域 */}
        <View>
          <Image style='width:300rpx;height:300rpx' src={this.state.imgTempFilePath} />
        </View>
        {/* 生成二维码 */}
        <View>
          <Button onClick={this.onGenerate} type='primary'>生成</Button>
        </View>
      </View>
    )
  }
}

