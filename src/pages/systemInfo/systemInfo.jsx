import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text, Input } from '@tarojs/components';

export default class extends Component {

	constructor(props) {
		super(props)
		this.state = {
			mobile: '',
			system: '',
			userWifiName: '',
			userWifiPwd: '',
			wifiList: [],
		}
	};

	config = {

	};

	//查看属性和方法是否存在
	canIUse() {
		// 对象的属性和方法是否存在
		console.log(Taro.canIUse('console.log'));
		console.log(Taro.canIUse('Image.src'));
		// 接口参数，回调或者返回值
		console.log(Taro.canIUse('showToast.object.image'));
		console.log(Taro.canIUse('request.object.method.GET'));
		// 组件的属性
		console.log(Taro.canIUse('live-player'));
	};
	// 获取系统信息（移动端的系统信息）
	getSystemInfo() {
		Taro.getSystemInfo({
			success: res => {
				console.log(res);
				this.setState({
					mobile: res.model,
					system: res.system
				})
			}
		})
	};

	// 连接wifi，form表单提交
	connectWIFI = (e) => {
		let that = this;
		this.setState({
			userWifiName: e.detail.value.wifiName,
			userWifiPwd: e.detail.value.wifiPwd,
		});
		// 判断当前手机是否支持WiFi方式的小程序连接
		Taro.getSystemInfo({
			success: res => {
				let system = '';
				if (res.platform == 'android') {
					system = parseInt(res.system.substr(8));
				}
				if (res.platform == 'ios') {
					system = parseInt(res.system.substr(4));
				}
				//判断系统和版本号
				if (res.platform === 'andorid' && system < 6) {
					Taro.showToast({
						title: '安卓当前版本不支持'
					})
					return;
				}
				if (res.platform == 'ios' && system < 8) {
					Taro.showToast({
						title: '苹果手机当前不支持'
					})
					return;
				}
				// 初始化wifi模板
				that.startWifi();
			}
		})

	};

	// 初始化wifi模板
	startWifi() {
		let that = this;
		Taro.startWifi({
			success() {
				that.connected()
			}
		})
	};

	connected() {
		Taro.connectWifi({
			SSID: this.state.userWifiName,
			password: this.state.userWifiPwd,
			success(res) {
				Taro.showToast({
					title: 'wifi连接成功',
					duration: 2000
				})
			},
			fail(res) {
				Taro.showToast({
					title: 'wifi连接失败',
					duration: 2000
				})
			}
		})
	}

	formReset() {

	};

	//搜索 附件的wifi
	startSearch() {
		//会被调到微信的设置页面
		const getWifiList = () => {
			Taro.getWifiList({
				success: res => {
					//成功跳转后的返回
					console.log('getWifiList', res);
					//当手机切换到设置->无线局域网，则会发起如下事件的回调，并得到当前的所有wifi的列表
					Taro.onGetWifiList(res => {
						console.log('onGetWifiList', res);
						const wifiList = res.wifiList.map(wifi => {
							const strength = Math.ceil(wifi.signalStrength * 4); //信号强度
							return Object.assign(wifi, { strength });
						})
						this.setState({
							wifiList
						})
					})
				}
			})
		}

		const startWifi = () => {
			Taro.startWifi({
				success: getWifiList,
				fail(res) {
					console.error(res);
				}
			})
		}

		let that = this;
		// ios和andorid区别
		Taro.getSystemInfo({
			success(res) {
				const isIOS = res.platform === 'ios';
				if (isIOS) {
					Taro.showToast({
						title: '提示',
						content: '由于系统限制，ios用户请手动先进入系统wifi页面，然后返回小程序',
						showCancel: false,
						success() {
							startWifi()
						}
					})
					return;
				}
				startWifi();
			}
		})
	}

	render() {
		return (
			<View>
				<View>
					<Text>系统信息</Text>
					<Button onClick={this.canIUse}>canIUse</Button>
					<Button onClick={this.getSystemInfo}>getSystemInfo</Button>
					<View>您的手机为：{this.state.mobile}</View>
					<View>您的手机系统为：{this.state.system}</View>
				</View>
				<View>
					<Form onSubmit={this.connectWIFI} onReset={this.formReset}>
						<View>一键连接wifi</View>
						<View>
							<View>
								<Text>wifi账户</Text>
								<Input placeholder='请输入wifi账户' name='wifiName' />
							</View>
							<View>
								<Text>wifi密码</Text>
								<Input placeholder='请输入wifi密码' name='wifiPwd' />
							</View>
							<Button formType='submit' type='primary' >连接wifi</Button>
							<Button onClick={this.startSearch}>搜索附近的wifi</Button>
						</View>
					</Form>
					{
						this.state.wifiList.map((wifi, index) => {
							return (
								<View key={index}>
									{wifi.SSID}
								</View>
							)
						})
					}
				</View>
			</View>
		)
	}
}