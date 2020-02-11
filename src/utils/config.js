export default {
  //附加的请求地址前缀
  //dockUrl: "https://competition.hzfyty.com/dock/competition",
  // "https://dock.huihujiankang.cn/dock/health",  原来路径
  dockUrl: "https://dock.huihu.wang/dock",
  //  dockUrl: "http://localhost:8080",
  //远程附件路径
  assetsRootPath: "https://dock.huihujiankang.cn/static/health/assets-remote/",

  //用户登录接口
  loginUrl: "/user/login",
  //用户注册接口
  registerUrl: "/user/register",
  //用户获取手机号码
  phoneUrl: "",
  //用户注册页面
  registerPage: "",
  // 诊断详情
  diagnosisDetailUrl: "/diagnosis/history/detail",
  // 待支付
  toBePaidUrl: "/examination/all/bind",
  // 支付
  payUrl: "/diagnosis/submit/devicepay",
  // 提交评价
  commentUrl: "/diagnosis/history/comment",
  // 打赏
  gratuityUrl: "/diagnosis/history/gratuity",
  //获取优惠券
  getCouponsUrl: "/activity/activity/coupon",
  //免费体验券
  freeCouponUrl: "/diagnosis/submit/freetrail",
  //使用优惠券
  useCouponUrl: "/activity/activity/changeprice"
};
