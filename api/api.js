import axios from "axios";

axios.defaults.timeout = 30000;
// axios.defaults.baseURL = process.env.VUE_APP_API_URL + "/index.php/index/";

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    //可以写if判断，提前拦截错误信息

    if (process.env.VUE_APP_MODE === "development") {
      // axios.defaults.baseURL = "http://47.94.4.201/index.php/index/";
      console.log("本地环境");
    } else if (process.env.VUE_APP_MODE === "test") {
      // axios.defaults.baseURL = "http://48.90.10.1.1/index.php/index";
      console.log("测试环境");
    } else {
      // axios.defaults.baseURL = "http://48.90.10.1.1/index.php/index";
      console.log("正式环境");
    }

    return response;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export function apiGet(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
        headers: { token: sessionStorage.getItem("token") },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function apiPost(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: url,
      headers: {
        strheader: "123123",
      },
      data: params,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
