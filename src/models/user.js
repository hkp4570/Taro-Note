import Taro from "@tarojs/taro";
import userApi from '../services/user';
export default {
  namespace: "user",
  state: {

  },
  effects: {
    *userInfo({payload},{call,put}){
      const response = yield call(userApi.getUserInfo,payload);
    }
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  }
};
