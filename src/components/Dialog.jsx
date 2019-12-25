import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './Dialog.less';

export default class Dialog extends Component{

  /**
   *  组件的生命周期
   */

  //组件加载时触发，一个组件只会调用一次，在此期间DOM页面结构还未准备好，所以不能进行视图交互
  componentWillMount() {
    console.log('组件开始运行');
  };

  //页面初次渲染完成，一个组件只会调用一次，可以与视图进行交互
  componentDidMount() {
    console.log('初次渲染完成');
  };

  //已经装载的组件在接受到新的属性前调用
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('组件接受到新数据',nextProps);
  };

  //组件是否需要更新
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('组件是否更新');
    return true;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('组件更新前');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('组件更新完成');
  }

  componentWillUnmount() {
    console.log('组件卸载');
  }

  render() {
    return(
      <View className='dialog'>
        我是弹窗
        { this.props.myName }
        { this.props.children }
      </View>
    )
  }
}
