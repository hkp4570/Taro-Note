import Taro, { Component, showActionSheet } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';

export default class extends Component {

	//保存文件，选择一个图片，并保存到本地
	saveFile() {
		Taro.chooseImage({
			success(res) {
				const tempFilePaths = res.tempFilePaths;
				Taro.saveFile({
					tempFilePath: tempFilePaths[0],
					success(res) {
						// 本地存储的图片的路径
						console.log(res)
						const saveFilePath = res.savedFilePath
						Taro.showToast({
							title: '提示',
							content: '存储完成',
							showCancel: false,
						})
						//windows:C:\用户\xxx\AppDat\Local\微信web开发者工具\User Data  存到此路径下
					}
				})
			}
		})
	};

	//获取本地缓存临时文件
	getFileInfo() {
		Taro.chooseImage({
			success(res) {
				Taro.getFileInfo({
					filePath: res.tempFilePaths[0],
					//size 已字节为单位
					//digst计算算法，md5/sha1 默认使用md5
					success(res) {
						console.log(res);
					}
				})
			}
		})
	};

	//获取已存储的文件列表
	getSaveFileList() {
		Taro.getSavedFileList({
			success(res) {
				console.log(res);
			}
		})
	};

	//清除本地缓存文件
	removeSaveFile() {
		Taro.getSavedFileList({
			success(res) {
				console.log(res);
				//删除（单文件名的清除）
				if (res.fileList.length > 0) {
					for (let i = 0; i < res.fileList.length; i++) {
						Taro.removeSavedFile({
							filePath: res.fileList[i].filePath,
							success(res) {
								console.log('success', res);
							},
							fail(res) {
								console.log('fail', res);
							},
							complete(res) {
								console.log('complete', res);
							}
						})
					}
				}
			}
		})
	};

	//打开文件   打开文件需要先下载文件
	openDocument() {
		Taro.downloadFile({
			url: 'https://www.baidu.com/content-search.xml',   //docx,xls,ppt,pdf
			success(res) {
				const filePath = res.tempFilePath
				Taro.openDocument({
					filePath: filePath,
					success(res) {
						console.log('文件已经打开');
					}
				})
			}
		})
	}

	render() {
		return (
			<View>
				<View>保存文件</View>
				<Button type='primary' onClick={this.saveFile.bind(this)}>保存文件</Button>

				<View>获取本地缓存的临时文件</View>
				<Button type='primary' onClick={this.getFileInfo.bind(this)}>获取本地缓存的临时文件</Button>

				<View>获取已存储的文件列表</View>
				<Button type='primary' onClick={this.getSaveFileList.bind(this)}>获取已存储的文件列表</Button>

				<View>清除本地缓存文件</View>
				<Button type='primary' onClick={this.removeSaveFile.bind(this)}>清除本地缓存文件</Button>

				<View>打开文件</View>
				<Button type='primary' onClick={this.openDocument.bind(this)}>打开文件</Button>
			</View>
		)
	}
}