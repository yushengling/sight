import { request } from '../request';

export function fetchAvatar() {
  return request({
    url: 'personal',
    options: {
      method: 'GET'
    }
  });
}

export function fetchCreateTheme(params) {
  return request({
    url: 'createTheme',
    options: {
      method: 'POST',
      body: params,
    }
  });
}

export function fetchGetPost(count, selectValue) {
  return request({
    url: `post?count=${count}&selectValue=${selectValue}`,
    options: {
      method: 'GET'
    }
  }); 
}