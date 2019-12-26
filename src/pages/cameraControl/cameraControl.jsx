import Taro, { Component } from '@tarojs/taro';
import { View, Text, Camera, Button, Image } from '@tarojs/components';

export default class extends Component{
  constructor(){
    super(...arguments);
    this.state = {
      tempImagePath:''
    }
    this.ctx = wx.createCameraContext();
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  takePhoto(){
    let that = this;
    //创建相机上下文
      that.ctx.takePhoto({
        quality:'high',
        success:(res)=>{
          console.log(res)
          that.setState({
            tempImagePath:res.tempImagePath
          })
        },
        fail:e => {
          console.log(e);
        }
      })
  }

  render() {
    return(
      <View>
        {/*刚打开页面会获取摄像头和相机权限*/}
        <Camera
          devicePosition='back'
          mode='normal'
          flash='auto'
          frameSize='medium'
          style='width:100%;height:100%'
        />
        <Button onClick={this.takePhoto}>拍照</Button>
        <Image
          mode='widthFix'
          src={this.state.tempImagePath}
        />
      </View>
    )
  }
}
