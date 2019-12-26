import Taro, {Component} from '@tarojs/taro';
import {View, Text, Form, Button, Input, Slider, Switch, Textarea} from '@tarojs/components';

export default class  extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      color:0
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  handleSubmit = (e) => {
    //可以获取到Form表单中控件的值
    console.log(e);
  };

  handleReset = (e) => {
    console.log(e);
  };

  hangleSwitch(e){
    console.log(e);
  }

  handleFocus(){
    console.log('focus');
  }

  handleBlue(){
    console.log('blue');
  }

  sliderChange(e){
    this.setState({
      color:e.detail.value
    });
  }

  render() {
    return (
      <View>
        <Text>Form</Text>
        <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <Input name='username' type='text' onFocus={this.handleFocus} onBlur={this.handleBlue} />
          <Button formType='submit'>提交</Button>
          <Button formType='reset'>重置</Button>
        </Form>
        <Text>Slider 滑块</Text>
        <View>
          <View style={'background:rgb(156,'+ this.state.color +',123);width:100%;height:20px;'} />
          <Slider min={1} max={100} step={1} value={20} showValue onChanging={this.sliderChange}/>
        </View>
        <Text>Switch</Text>
        <View>
          <Switch checked onChange={this.hangleSwitch} />
        </View>
        <Text>TextArea</Text>
        <View>
          <Textarea style='width:100%;height:200px;border:1px solid' autoHeight />
        </View>
      </View>
    )
  }
}
