import { request } from '../request';

export function fetchPasswordChange(params) {
  return request({
    method: 'passwordChange',
    options: {
      body: params.values,
      method: 'POST'
    }
  });
}

export function fetchAvatar() {
  return request({
    method: 'setting',
    options: {
      method: 'GET'
    }
  });
}