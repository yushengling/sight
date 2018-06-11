import { message } from 'antd';
//生产环境还是开发环境
const getApi = process.env.NODE_ENV === 'production' ? 'http://47.98.231.165:9000/api/v1/' : 'http://localhost:9000/api/v1/';
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
function parseJSON(response) {
  return response.json();
}
/**
 * [request 请求]
 * @author  Jiang
 * @param  {[type]} options.method   [方法名]
 * @param  {[type]} options.options  [选项]
 * @param  {[type]} options.callback [回调]
 * @return {[type]}                  [description]
 */
function request({ method, options, callback }) {
  options.mode = "cors";
  options.headers = {
    'Content-Type': 'application/json'
  };
  options.credentials = 'include';
  if(!(options.method === 'GET')) {
    options.body = JSON.stringify(options.body);
  }
  return fetch(getApi + method, options )
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => {
      return data;
    }).catch((err) => {
      message.config({
        top: 24,
        duration: 1,
        maxCount: 3,
      });
      message.error('发送fetch失败' + JSON.stringify(err) + ',方法名：' + method);
    });
}

export { request };