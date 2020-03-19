import Taro,{ Component } from '@tarojs/taro';
import { View,Image,Text } from '@tarojs/components';
import './home';

//数据库对象
const db = Taro.cloud.database({
  env:'test-5f3x2',
});
//表对象
const channelListObj = db.collection('channelList');
//命令对象
const _cmd = db.command;

//doc只能是按照id值来查找，如果要按某一字段查找，用where({字段名：字段内容})


export default class extends Component{
  config={
    navigationBarTitleText:'电视云'
  };
  constructor(props){
    super(props);
    this.state={
      channelLists:'',
    }
  };
  componentDidShow(){
    let that = this;
    channelListObj.get()
    .then(res => {
      console.log(res);
      that.setState({
        channelLists:res.data
      })
    })
    .catch(console.error);
  };
  //跳转电视台
  gotoTVChannel(id,name,e){
    let params = {
      url:'/pages/cloudTV/channelList?channelId='+ id + '&channelName=' + name
    }
    Taro.navigateTo(params);
  };
  render(){
    return(
      <View className='container'>
        <View className='title'>电视云</View>
        <View className='page-section'>
            {
              this.state.channelLists.map((item, index) => {
                return (
                    <View key={index} className='row' onClick={this.gotoTVChannel.bind(this,item._id,item.channelName)}>
                        <Image src={`../../static/images/${item.channelImg}`}></Image>
                        <Text className='channel-name'>{item.channelName}</Text>
                        <Text className='sign'>&gt;</Text>
                    </View>
                )
              })
            }
        </View>
      </View>
    )
  }
}