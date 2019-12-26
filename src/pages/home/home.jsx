import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Text,
  ScrollView,
  Swiper,
  SwiperItem,
  MovableArea,
  MovableView,
  Video,
  CoverView,
  CoverImage,
  Navigator
} from '@tarojs/components';
import './home.less';

export default class extends Component {
  constructor() {
    super(...arguments);
    this.state = {}
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };
  play(){
    console.log('video play');

    wx.createVideoContext('myVideo').play();
  }

  render() {
    return (
      <View>
        <Navigator target='self' open-type='navigate' url='/pages/center/center'>Taro导航-navigate</Navigator>
        <Text>flex布局</Text>
        <View className='flex-wrap'>
          <View hoverClass='active' hoverStartTime='1000' hoverStayTime='2000' className='item'>text1</View>
          <View className='item'>text2</View>
          <View className='item'>text3</View>
        </View>
        <Text>ScrollView</Text>
        <ScrollView
          className='scrollview'
          scrollX
          scrollWithAnimation
          scrollTop={50}
        >
          <View className='vView'>A</View>
          <View className='vView'>B</View>
          <View className='vView'>C</View>
        </ScrollView>
        <Text>Swiper</Text>
        <Swiper
          className='swiper'
          indicatorDots
          indicatorColor='#ccc'
          indicatorActiveColor='#f40'
          autoplay
          interval={2000}
          current={0}
          circular={true}
        >
          <SwiperItem>
            <View className='text-1'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='text-1'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='text-1'>3</View>
          </SwiperItem>
        </Swiper>
        <Text>movableView</Text>
        {/* direction:all , vertical, horizontal */}
        <MovableArea style='width:100%; height:200px; background-color:red;'>
          <MovableView style='width:50px; height:50px; background-color:green;' direction='horizontal'  />
        </MovableArea>
        <Text>CoverView,CoverImage</Text>
          <Video id='myVideo' className='video' controls={true} src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'>
            <CoverView>
              <CoverView onClick={this.play}>
                <CoverImage style='width:50px;height:50px' className='img' src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1422438190,4092046722&fm=26&gp=0.jpg' />
              </CoverView>
            </CoverView>
          </Video>
      </View>
    )
  }
}

