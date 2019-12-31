import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

/**
 * 类函数式组件 注意贵方
 *  函数的命名需要以render开头，render后的第一个字母必须大写
 *  函数的参数不得传入jsx参数
 *  函数不得递归
 */
export default class extends Component{
  constructor(){
    super(...arguments);
    this.state = {
      defaultHeader:'Tom',
      defaultFooter:'Jerry'
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  renderHeader(header){
    const { defaultHeader } = this.state;
    return(
      <View>header:{ header ? header : defaultHeader }</View>
    )
  };

  renderFooter(footer){
    const { defaultFooter } = this.state;
    return (
      <View>footer:{footer ? footer : defaultFooter}</View>
    )
  };

  render() {
    return(
      <View>
        { this.renderHeader(this.props.header ? this.props.header : '') }
        <View>this is ClassFunc comp</View>
        { this.renderFooter(this.props.footer ? this.props.footer : '') }
      </View>
    )
  }
}
