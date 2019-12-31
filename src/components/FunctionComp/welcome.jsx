import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';

export default function (props) {

  const handleClick = () => {
    console.log(props.name);
  }
  return(
    <View>
      <View>{ props.name }</View>
      <Button onClick={handleClick} >输出</Button>
    </View>
  )
}
