import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import './scrollTop2.less';
import { connect } from '@tarojs/redux';
@connect(({ acl }) => ({
  acl
}))
export default class extends Component {
  config = {

  };
  constructor(props) {
    super(props);
    this.state = {
      topNum: 0,
      cangotop: true
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  //滚动条滚动式触发
  scrolltoTop(e) {
    if (e.detail.scrollTop > 100) {
      this.setState({
        cangotop: false,
      })
    } else {
      this.setState({
        cangotop: true
      });
    }

    //Taro的数值无变化导致不会重新渲染，这样回到顶部无效果，因此在此做数值改变，使其重新渲染
    this.setState({
      topNum: -1
    });
  };
  //滚动到顶部
  goTop() {
    this.setState({
      topNum: 0
    });
  }

  render() {
    return (
      <View>
        <ScrollView scrollY style='height:700px;' scrollTop={this.state.topNum} onScroll={this.scrolltoTop}>
          <View className='scroll-view1'>top2</View>
          <View className='scroll-view2'>top3</View>
          <View className='gotop' hidden={this.state.cangotop} onClick={this.goTop}>
            <View>回到顶部</View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
