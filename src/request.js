import {
    message,
} from 'antd';

const getApi = process.env.NODE_ENV === 'production' ? 'https://downfuture.com:9000/api/v1/' : 'http://localhost:9000/api/v1/';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function parseJSON(response) {
    return response.json();
}

// eslint-disable-next-line import/prefer-default-export
export function request({
    url,
    options,
}) {
    const optionsBak = options;
    optionsBak.mode = 'cors';
    if (!optionsBak.sign) {
        optionsBak.headers = {
            'Content-Type': 'application/json',
        };
        if (!(optionsBak.method === 'GET' || optionsBak.method === 'DELETE')) {
            optionsBak.body = JSON.stringify(optionsBak.body);
        }
    }
    optionsBak.credentials = 'include';
    return fetch(getApi + url, optionsBak)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => data)
        .catch((err) => {
            message.error(`发送fetch失败${JSON.stringify(err)},方法名：${url}`);
        });
}
