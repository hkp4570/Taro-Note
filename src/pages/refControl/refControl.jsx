import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import Cat from '../../components/Cat/cat';

export default class extends Component{
  catRef = Taro.createRef();
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

  handleClick(){
    // this.cat.miao();
    this.catRef.current.miao();
  };

  cat = null;
  refCat = node => this.cat = node;  //this.cat会变成Cat组件的实例的引用
  //this.refCat是获取了当前Cat实例对象，并传送给了node，node再赋值给了this.cat

  render() {
    return(
      <View>
        {/*<Cat ref={this.refCat} />*/}
        <Cat ref={this.catRef} />
        <Button onClick={this.handleClick.bind(this)}>button</Button>
      </View>
    )
  }
}
