import { request } from '../request';

export function fetchPasswordChange(params) {
  return request({
    method: 'passwordChange',
    options: {
      body: params.values,
      method: 'PUT'
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