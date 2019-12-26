import Taro, {Component} from '@tarojs/taro';
import {View, Text, Icon, Button, Progress, RichText } from '@tarojs/components';

export default class extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      content:[],
      contentLen:0,
      downloadProgress:0,
      nodes:[{
        name:'div',
        attrs:{
          class:'div_class',
          style:'color:red;'
        },
        children:[{
          type:'text',
          text:'hello world'
        }]
      }]
    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };
  add = () => {
    const cot = this.state.content.slice();
    cot.push({title:'hello world'});
    this.setState({
      content:cot,
      contentLen:cot.length
    });
  };
  remove = () => {
    const pop = this.state.content.slice();
    pop.pop();
    this.setState({
      content:pop,
      contentLen:pop.length
    });
  };
  downLoad = () => {
    const downList = [...Array(100).keys()];
    downList.map(item => {
      this.setState({
        downloadProgress:item + 1
      });
    })
  };

  render() {
    return (
      <View>
        <Text>Icon</Text>
        <View>
          <Icon size='40' type='success' color='red' />
        </View>
        <Text>Text</Text>
        <View>
          {
            this.state.content.map((item,index) => (
              <Text key={index}>{item.title}</Text>
            ))
          }
          <Button plain onClick={this.add}>add</Button>
          <Button plain onClick={this.remove}>remove</Button>
        </View>
        <Text>Progress</Text>
        <View>
          <Progress percent={this.state.downloadProgress} backgroundColor='#ccc' activeColor='red' active showInfo />
          <Icon type='download' onClick={this.downLoad}></Icon>
        </View>
        <Text>RichText  富文本</Text>
        <View>
          <RichText nodes='hello world' />
          <RichText nodes='<h1>hello world</h1>' />
          <RichText nodes={this.state.nodes} />
        </View>
      </View>
    )
  }
}
