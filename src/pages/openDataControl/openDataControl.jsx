import Taro, { Component } from '@tarojs/taro';
import { View, Text, OpenData } from '@tarojs/components';

export default class  extends Component{
  constructor(){
    super(...arguments);
    this.state = {

    }
  };

  componentWillMount() {
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  render() {
    return(
      <View>
        <View>
          我的昵称：
          <OpenData type='userNickName' lang='zh_CN' />
        </View>
        <View style={{ width:'200px',height:'200px' }}>
          我的头像：
          <OpenData type='userAvatarUrl' lang='zh_CN' />
        </View>
        <View>
          我的性别:
          <OpenData type='userGender' lang='zh_CN' />
        </View>
        <View>
          所在城市：
          <OpenData type='userCity' lang='zh_CN' />
        </View>
        <View>
          所在省份：
          <OpenData type='userProvince' lang='zh_CN' />
        </View>
        <View>
          所在国家：
          <OpenData type='userCountry' lang='zh_CN' />
        </View>
        <View>
          所用语言：
          <OpenData type='userLanguage' lang='zh_CN' />
        </View>
      </View>
    )
  }
}
