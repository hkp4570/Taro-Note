import config from "./config";
import Taro, { InnerAudioContext } from "@tarojs/taro";

let innerAudioContext = null;

let t = t => {
  return (t = t.toString())[1] ? t : "0" + t;
};

const helper = {
  asset: path => {
    return config.assetsRootPath + path;
  },
  toast: text => {
    wx.showToast({
      title: text,
      icon: "none",
      duration: 1500
    });
  },
  wrapper: context => {
    return {
      setState(state) {
        return new Promise((resolve, reject) => {
          context.setState(state, () => {
            resolve();
          });
        });
      }
    };
  },
  sleep: seconds => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, seconds * 1000);
    });
  },

  formatTime: e => {
    return [e.getFullYear(), e.getMonth() + 1, e.getDate()].map(t).join(".");
  },

  playVoice: url => {
    if (!innerAudioContext) {
      innerAudioContext = Taro.createInnerAudioContext();
      innerAudioContext.autoplay = true;
    }
    innerAudioContext.stop();
    innerAudioContext.src = url;
    innerAudioContext.play();
  },
  stopVoice: () => {
    if (innerAudioContext) innerAudioContext.stop();
  }
};

export const asset = helper.asset;
export const toast = helper.toast;
export const wrapper = helper.wrapper;
export const $ = helper.wrapper;
export const sleep = helper.sleep;
export const formatTime = helper.formatTime;
export const playVoice = helper.playVoice;
export const stopVoice = helper.stopVoice;
