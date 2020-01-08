import Taro, { Component } from '@tarojs/taro';
import { View, Camera, Button, Image } from '@tarojs/components';

export default class extends Component{
 config={

  };
  constructor(props){
    super(props);
    this.state = {
      tempImagePath:''
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  takePhoto(){
    const ctx = Taro.createCameraContext();
    ctx.takePhoto({
      quality:'high',
      success:res => {
        console.log(res);
        this.setState({
          tempImagePath:res.tempImagePath
        });
      }
    })
  }

  render() {
    return(
      <View>
        <Camera mode='normal' flash='auto' devicePosition='back' style='width:100%;height:300px'  />
        <Button onClick={this.takePhoto}>拍照</Button>
        <Image mode='widthFix' src={this.state.tempImagePath} />
      </View>
    )
  }
}
