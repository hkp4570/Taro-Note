import Taro, { Component } from '@tarojs/taro';
import { View, Image, Button } from '@tarojs/components';
import './playMusic.less';

export default class  extends Component{
 config={
    navigationBarTitleText:'taro音频基础'
  };
  constructor(props){
    super(props);
    this.state = {
      audioUrl: 'http://mpge.5nd.com/2018/2018-5-10/85111/1.mp3',
      coverImgUrl: 'http://img.5nd.com/86/photo/2018album/20185/85111.jpg'
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  //开始播放
  actionPlay(){
    Taro.playBackgroundAudio({
      dataUrl:this.state.audioUrl,
      title:'哑巴',
      coverImgUrl:this.state.coverImgUrl
    });
    //播放开始监控
    Taro.onBackgroundAudioPlay(() => {
      console.log('开始播放歌曲');
    })
  };

  //暂停播放
  actionPause(){
    Taro.pauseBackgroundAudio();
    Taro.onBackgroundAudioPause(() =>  {
      console.log('暂停播放歌曲');
    })
  };

  //停止播放
  actionStop(){
    Taro.stopBackgroundAudio();
    Taro.onBackgroundAudioStop(() => {
      console.log('停止播放歌曲');
    })
  };

  //指定播放到某一指定位置
  actionSeek(){
    Taro.seekBackgroundAudio({
      position:20
    })
  };


  render() {
    return(
      <View>
        <View className='title'>PlayMusic</View>
        <View className='section'>
          <Image src={this.state.coverImgUrl} />
        </View>
        <View className='btn'>
          <Button type='primary' onClick={this.actionPlay.bind(this)}>播放</Button>
          <Button type='primary' onClick={this.actionPause.bind(this)}>暂停</Button>
          <Button type='primary' onClick={this.actionStop.bind(this)}>停止</Button>
          <Button type='primary' onClick={this.actionSeek.bind(this)}>跳转（指定播放）</Button>
        </View>
      </View>
    )
  }
}
