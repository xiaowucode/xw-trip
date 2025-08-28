import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class XWRequest {
  constructor(baseURL, timeout=1000) {
    this.instance = axios.create({
      baseURL,
      timeout
    });

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("全局请求拦截成功");
        return config;
      },
      (err) => {
        // console.log("全局请求拦截失败");
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        // console.log("全局响应拦截成功");
        return res.data;
      },
      (err) => {
        // console.log("全局响应拦截失败");
        return err;
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "GET" });
  }

  post(config) {
    return this.request({ ...config, method: "POST" });
  }
}

export default new XWRequest(BASE_URL, TIMEOUT);