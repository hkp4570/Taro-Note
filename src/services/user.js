import http from "../utils/http";
// import '../utils/runtime';
export default {
   async getUserInfo(pars) {
    return http.post("/user/info", pars);
  },
};