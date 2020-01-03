import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Input, MovableArea, MovableView } from '@tarojs/components';

export default class extends Component {
  config = {

  };

  constructor() {
    super(...arguments);
    this.state = {
      captureScreen: '用户还没有截屏',
      phone: '',
      game: '游戏进行中'
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  componentDidShow() {
    //监测用户截屏   截屏后保存触发该事件
    Taro.onUserCaptureScreen(() => {
      this.setState({
        captureScreen: '用户截屏了'
      })
    })
    console.log('用户截屏了');
  };

  //手机发生长振动
  vibrateLong() {
    Taro.vibrateLong({})
  };

  //手机短振动
  vibrateShort() {
    Taro.vibrateShort({})
  };

  getPhone = (e) => {
    this.setState({
      phone: e.detail.value
    })
  };

  //拨打电话
  makePhoneCall() {
    if (this.state.phone === '0000') {
      Taro.showToast({
        title: '您还没有电话',
        icon: 'none',
        duration: 1000
      })
    } else {
      let params = {
        phoneNumber: this.state.phone,
      }
      Taro.makePhoneCall(params);
    }
  };

  //获取到movableView移动的位置
  /**
   * 需求，移动物体触到边（上下左右边），游戏结束，否自游戏进行中
   * 手机各个分辨率都要适用，movableArea的边是不固定的
   */
  movableChange = (e) => {
    let x = e.detail.x;
    let y = e.detail.y;
    let areaWidth = 0;
    let areaHeight = 0;
    let areaViewWidth = 0;
    let areaViewHeight = 0;
    let xRight = 0;
    let yTop = 0;

    //得到当前控件的实例对象的API  Taro.createSelectorQuery();
    let query = Taro.createSelectorQuery();
    query.select('.movable-area').boundingClientRect();
    query.exec(res => {
      //拿到选中此类名元素的位置信息
      // console.log(res);
      areaWidth = res[0].width;
      areaHeight = res[0].height;

      query.select('.movable-view').boundingClientRect();
      query.exec(resp => {
        // console.log(resp);
        areaViewWidth = resp[1].width;
        areaViewHeight = resp[1].height;
        xRight = areaWidth - areaViewWidth;
        yTop = parseFloat(areaHeight - areaViewHeight).toFixed(1);
        this.setMessage(x, y, xRight, yTop);
      })
    })
  };

  setMessage(x, y, xRight, yTop) {
    // xRight,yTop 判断右边和下边是否触底
    let message = '游戏进行中';
    if (x == '0') {
      message = '碰左边，游戏结束';
    } else if (x == xRight) {
      message = '碰右边，游戏结束';
    } else if (y == '0') {
      message = '碰上边，游戏结束';
    } else if (y == yTop) {
      message = '碰下面，游戏结束';
    }
    if (message != '游戏进行中') {
      Taro.vibrateLong();
    }
    this.setState({
      game: message
    })

  };

  render() {
    return (
      <View>
        <View>
          <Text>用户截屏</Text>
          <View>{this.state.captureScreen}</View>
        </View>
        <View>
          <Text>手机振动</Text>
          <Button onClick={this.vibrateLong}>使用手机发生较长振动</Button>
          <Button onClick={this.vibrateShort}>使用手机发生短振动</Button>
        </View>
        <View>
          <Text>拨打电话</Text>
          <Input type='number' placeholder='请输入电话' onBlur={this.getPhone} />
          <Button onClick={this.makePhoneCall}>拨打电话</Button>
        </View>

        {/* 移动组件操作 */}
        <View>
          <View>
            游戏进程:
            {this.state.game}
          </View>
          <MovableArea className='movable-area' style='width:300px;height:300px;background-color:green;'>
            <MovableView className='movable-view' direction='all' onChange={this.movableChange} style='width:100px;height:100px;background-color:red'>
              <View style='width:100%;height:100%' />
            </MovableView>
          </MovableArea>
        </View>
      </View >
    )
  }
}
