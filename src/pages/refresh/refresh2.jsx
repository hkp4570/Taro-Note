import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './refresh2.less';
export default class  extends Component{
  config={
    navigationBarTitleText:'上拉触底刷新'
  };
  constructor(props){
    super(props);
    this.state = {
      _newsList: ['Taro学习是需要认真对待的', '学习没有捷径刻苦才能成功', 'Taro学习是需要认真对待的', '学习没有捷径刻苦才能成功', 'Taro学习是需要认真对待的', '学习没有捷径刻苦才能成功', 'Taro学习是需要认真对待的', '学习没有捷径刻苦才能成功', 'Taro学习是需要认真对待的', '学习没有捷径刻苦才能成功', 'Taro学习是需要认真对待的', '学习没有捷径刻苦才能成功'],
      _newsData:['新加载的数据'],
      reloadNum:0
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  //系统事件，在滚动到页面底部时自动触发
  onReachBottom() {
    console.log('滚动到页面底部');
    //判断是否所有数据加载完毕，模拟一个变量可以被加载3次
    if(this.state.reloadNum === 3){
      Taro.showToast({
        title:'已经加载完毕',
        icon:'none'
      });
      return ;
    }else{
      let newData = this.state._newsList;
      newData.push(this.state._newsData[0]);
      this.setState({
        reloadNum:this.state.reloadNum + 1,
        _newList:newData
      });
    }
  }

  render() {
    return(
      <View className='container'>
        <View className='page-section'>
          {this.state._newsList.map((item, index) => {
            return (
              <View taroKey={index} className='news-list-item'>
                <Text className='news-list-item-title'>{item}</Text>
                <Text className='flag'>></Text>
              </View>
            )
          })
          }
        </View>
      </View>
    )
  }
}
