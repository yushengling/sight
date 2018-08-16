import { request } from '../request';

export function fetchAvatar() {
  return request({
    method: 'personal',
    options: {
      method: 'GET'
    }
  });
}

export function fetchCreateTheme(params) {
  return request({
    method: 'createTheme',
    options: {
      method: 'POST',
      body: params,
    }
  });
}