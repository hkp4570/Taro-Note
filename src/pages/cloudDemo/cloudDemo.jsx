import Taro,{ Component } from '@tarojs/taro';
import { View,Button } from '@tarojs/components';
import './cloudDemo.less';

//创建云数据库对象
const db = Taro.cloud.database();
const database = db.collection('student');

export default class extends Component{
  constructor(props){
    super(props);
    this.state={
      dataList:[]
    }
  };
  config={
    navigationBarTitleText: '云操作',
  };
  componentDidShow(){

  };

  //读取云数据    在云开发中修改数据权限才可以读取到
  getCloudData(){
    //获取云数据库student中所有记录
    db.collection('student').get({
      success:res=>{
        console.log(res);
        
        this.setState({
          dataList:res.data
        })
      }
    })
  };

  //录入数据
  addData(){
    db.collection('student').add({
      data:{
        name:'sunny',
        age:20
      }
    }).then(res => {
      console.log(res);
    })
  };

  //更新单条记录   
  updateData(id,e){
    db.collection('student').doc(id).update({
      data:{
        age:99
      }
    }).then(res => {
      console.log(res);
    })
  };

  //获取单条记录
  getCloudDataOne(id,e){
    db.collection('student')
    .doc(id)
    .get()
    .then(res => console.log('res',res))
    .catch(err => console.err('err',err))
  };

  //删除记录
  deleteData(id,e){
    database.doc(id).remove({}).then(res => console.log(res));
  }

  render(){
    return(
      <View>
         <View className='title'>CloudDataDemo</View>
            <Button onClick={this.deleteData.bind(this,'74b140b45e4371c00e48554d0e9c69d3')}>删除记录</Button>
            <Button onClick={this.updateData.bind(this,'74b140b45e4371c00e48554d0e9c69d3')}>更新单条记录</Button>
            <Button onClick={this.addData}>录入数据</Button>
            <Button type='primary' onClick={this.getCloudData}>读取数据</Button>
            {/* 显示数据 */}
            <View>
              {this.state.dataList.map((item,index)=>{
                  return (
                      <View taroKey={index} onClick={this.getCloudDataOne.bind(this,item._id)}>
                        <View>姓名：{item.name}</View>
                    </View>
                  )
              })
                
              }
          </View>
      </View>
    )
  }
}