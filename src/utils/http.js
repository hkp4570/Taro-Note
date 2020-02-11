import Taro from "@tarojs/taro";
import request from "./request";
import config from "./config";

const raw = (url, options) => {
  options.url = url;
  const newOptions = {
    ...options,
    header: { ...options.header, Application: "mb-custom", "Content-Type": "application/json" }
  };
  const sessionKey = Taro.getStorageSync("sessionKey");
  console.log(123, sessionKey)

  if (sessionKey) {
    //调整MB-TOKEN改为TOKEN
    newOptions.header["TOKEN"] = sessionKey;
  }
  return Taro.request(newOptions)
    .then(resp => {
      if (resp.statusCode === 401) {
        //没有验证用户信息
        Taro.showToast({ title: "没有验证手机号码", icon: "none" });
        Taro.switchTab({ url: "/pages/user/home" });
        return;
      }
      return resp.data;
    })
    .catch(err => {
      Taro.showToast({
        title: "服务器异常",
        icon: "none"
      });
    });
};

const http = (path, options) => {
  const url = config.dockUrl + path;
  return raw(url, options);
};

http.post = (path, body) => {
  const options = {};
  options.method = "POST";
  options.data = body;
  return http(path, options);
};

http.get = path => {
  const options = {};
  options.method = "GET";
  return http(path, options);
};

http.upload = (path, body) => {
  const options = {};
  let pars = Object.assign({}, body);
  delete pars.file;
  delete pars.path;
  options.url = config.dockUrl + path;
  options.name = body.file;
  options.filePath = body.path;
  options.formData = pars;
  const newOptions = {
    ...options,
    header: { ...options.header, Application: "mb-custom", "Content-Type": "application/json" }
  };
  const sessionKey = Taro.getStorageSync("sessionKey");
  if (sessionKey) {
    newOptions.header["TOKEN"] = sessionKey;
  }
  return Taro.uploadFile(newOptions)
    .then(resp => {
      if (resp.statusCode === 401) {
        //没有验证用户信息
        Taro.showToast({ title: "没有验证手机号码", icon: "none" });
        Taro.switchTab({ url: "/pages/user/home" });
        return;
      }
      return JSON.parse(resp.data);
    })
    .catch(err => {
      Taro.showToast({
        title: "服务器异常",
        icon: "none"
      });
    });
};
http.raw = raw;

export default http;
