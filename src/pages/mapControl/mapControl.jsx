import Taro, { Component } from '@tarojs/taro';
import { View, Map, Button } from '@tarojs/components';

export default class  extends Component{
  config={

  };

  constructor(){
    super(...arguments);
    this.state = {
      latitude:23.099994,
      longitude:113.324520,
      markers:[
        {id:1,latitude:23.099994,longitude:113.324520}
      ],
    };
    this.mapCtx = wx.createMapContext('myMap');
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  //获取位置  获取地图当前显示的中心点的坐标（可拖动地图）
  getCenterLocation(){
    this.mapCtx.getCenterLocation({
      success:res => {
        console.log(res.longitude,res.latitude);
      }
    })
  };

  //移动位置
  moveToLocation(){
    this.mapCtx.moveToLocation()
  };

  //移动标注
  translateMarker(){
    this.mapCtx.translateMarker({
      markerId:1,
      autoRotate:true,
      duration:1000,
      destination:{
        latitude:23.10229,
        longitude:113.3345211
      },
      animationEnd(){
        console.log('动画已完成');
      }
    })
  }

  render() {
    return(
      <View>
        MapControl
        {/* covers即将移除 */}
        <Map
          id='myMap'
          style={{ width:'100%',height:'300px' }}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          markers={this.state.markers}
          showLocation={true}
        />
        <View>
          <Button onClick={this.getCenterLocation}>获取位置</Button>
          <Button onClick={this.moveToLocation}>移动位置</Button>
          <Button onClick={this.translateMarker}>移动标注</Button>
        </View>
      </View>
    )
  }
}
