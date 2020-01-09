import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView, Navigator, Swiper, Image } from '@tarojs/components';
import './imageNews.less';
export default class extends Component{
 config={

  };
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

  render() {
    return(
      <View>
        {/*图片新闻*/}
        <View className='bg'>
          <ScrollView scrollX>
            <View className='menu'>
              <Navigator url='#'>社会新闻</Navigator>
              <Navigator url='#'>社会新闻</Navigator>
              <Navigator url='#'>社会新闻</Navigator>
              <Navigator url='#'>社会新闻</Navigator>
              <Navigator url='#'>社会新闻</Navigator>
              <Navigator url='#'>社会新闻</Navigator>
              <Navigator url='#'>社会新闻</Navigator>
              <Navigator url='#'>社会新闻</Navigator>
            </View>
          </ScrollView>
        </View>
        {/*轮播图*/}
        <Swiper>
          <SwiperItem>
            <Image src='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3008142408,2229729459&fm=26&gp=0.jpg' />
          </SwiperItem>
          <SwiperItem>
            <Image src='https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922344982,423380743&fm=26&gp=0.jpg' />
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}
