import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import moment from 'moment';

export default class Clock extends Taro.Component{
  constructor(props){
    super(props);
    this.state = {
      data:moment().format('YYYY-MM-DD HH:mm:ss'),
      num:0,
    }
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        data:moment().format('YYYY-MM-DD HH:mm:ss')
      });
    },1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  };

  // 阻止事件冒泡
  change = (e) => {
    e.stopPropagation();
    console.log('改变button');
    this.setState({
      num:100
    },() => {
      console.log(this.state.num);
    });
  };

  changeView(e){
    console.log('改变view');
  }

  render() {
    return(
      <View onClick={() => this.changeView()}>
        {this.state.data}
        <Button onClick={this.change}>改变</Button>
      </View>
    )
  }
}

// import { useState,useEffect } from '@tarojs/taro';
// import { View } from '@tarojs/components';
// import moment from 'moment';
//
// export default function (props) {
//   const [now,setNow] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
//   let timer = null;
//   useEffect(() => {
//     timer = setInterval(() => {
//       setNow(moment().format('YYYY-MM-DD HH:mm:ss'))
//     },1000);
//     return () => {
//       clearInterval(timer);
//     }
//   });
//
//   return(
//     <View>{now}</View>
//   )
// }
