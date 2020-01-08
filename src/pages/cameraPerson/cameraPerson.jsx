import Taro, { Component } from '@tarojs/taro';
import { View, Camera,CoverView,CoverImage } from '@tarojs/components';
import hd from '../../assets/images/hd.png';
import rx from '../../assets/images/rx.png';
import './cameraPerson.less';

export default class extends Component{
 config={
    navigationBarTitleText:'人形拍照'
  };
  constructor(props){
    super(props);
    this.state = {
      src:''
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  //拍照
  photograph(){
    let that = this;
    const ctx = Taro.createCameraContext();
    ctx.takePhoto({
      quality:'high',
      success(res){
        that.setState({
          src:res.tempImagePath
        },() => {
          //拍照完成后数据存储
          Taro.setStorage({
            key:'photoPeople',
            data:res.tempImagePath
          })
          //跳转页面
          Taro.navigateTo({
            url:'/pages/cameraPerson/showPhoto'
          })
        })
      }
    })
  }


  render() {
    return(
      <Camera className='camera-cls' devicePosition='back'>
        <CoverView className='main-tiips'>对准人形</CoverView>
        <CoverImage className='verifycode-cover' src={rx} />
        <CoverImage onClick={this.photograph} className='red-point' src={hd} />
      </Camera>
    )
  }
}
