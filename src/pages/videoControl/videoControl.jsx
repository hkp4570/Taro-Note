import Taro, { Component } from '@tarojs/taro';
import { View, Text, Video, Input, Button } from '@tarojs/components';

export default class  extends Component{
  constructor(){
    super(...arguments);
    this.videoContext = wx.createVideoContext('myVideo');
    this.state = {
      userInput:'',
      danmuList:[
        {
          text:'弹幕1',
          color:'#ff0000',
          time:1
        },
        {
          text:'弹幕2',
          color: "#00ff00",
          time: 5
        }
      ]
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  videoPlay() {
    console.log('开始播放');
  }
  videoPause() {
    console.log('暂停');
  }
  videoTimeUpdate() {
    // console.log('播放中');
  }
  videoError(e) {
    console.log(e,'视频出错');
  }

  getUserInput(e){
    this.setState({
      userInput:e.detail.value
    });
  }

  //发送弹幕,不是把新发送的弹幕添加到已有的danmuList中，而是直接发送
  sendDanmu(){
    this.videoContext.sendDanmu({
      text:this.state.userInput,
      color:this.getRandomColor()
    })
  };

  getRandomColor(){
    const rgb = [];
    for (let i = 0; i < 3; i++) {
      let color = Math.floor(Math.random() * 256).toString(16);
      color = color.length == 1 ? '0' + color : color;
      rgb.push(color);
    }
    return '#' + rgb.join('');
  }

  render() {
    return(
      <View>
        <Video
          src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
          controls={true}
          autoplay={false}
          poster='http://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
          initialTime='15'
          id='myVideo'
          loop={false}
          muted={false}

          onPlay={this.videoPlay}
          onPause={this.videoPause}
          onTimeUpdate={this.videoTimeUpdate}
          onError={this.videoError}

          danmuList={this.state.danmuList}
          enableDanmu={true}
          danmuBtn={true}
        />
        {/*发送弹幕内容*/}
        <View>
          <Input type='text' placeholder='弹幕内容' onBlur={this.getUserInput} />
          <Button onClick={this.sendDanmu}>发送弹幕</Button>
        </View>
      </View>
    )
  }
}
