import Taro,{Component} from '@tarojs/taro';
import { View,Button,Input } from '@tarojs/components';

export default class extends Component{

    btnClick(){
        let data = Taro.getMenuButtonBoundingClientRect();
        console.log('按键的宽度',data.width);
        console.log('按键的高度',data.width);
        console.log('按键的上边界坐标',data.top);
        console.log('按键的下边界坐标',data.bottom);
        console.log('按键的左边界坐标',data.left);
        console.log('按键的右边界坐标',data.right);
    };

    componentDidShow(){
        //监控屏幕大小
        wx.onWindowResize(res => {
            console.log(res);
        });
        //监控键盘高度
        wx.onKeyboardHeightChange(res => {
            console.log(res);
        })
    }

    render(){
        return(
            <View>
                <View>获取控件的位置信息</View>
                <Button onClick={this.btnClick}>获取按钮的位置信息</Button>
                <Input placeholder='input' />
            </View>
        )
    }
}