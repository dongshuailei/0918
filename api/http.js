import { apiPost } from "../api/api";

export function mycenter(data) {
  return new Promise((resolve, reject) => {
    apiPost("https://www.zzgoodqc.cn/index.php/index/index/mycenter", data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getlxc(data) {
  return new Promise((resolve, reject) => {
    apiPost(
      "https://www.zzgoodqc.cn/index.php/index/callcenter/getheaders",
      data
    )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
