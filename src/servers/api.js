import { request } from '../request';

export function fetchData(params) {
  return request({
    method: `home?count=${params.count}`,
    options: {
      method: 'GET'
    }
  });
}

export function fetchCollection(params) {
  return request({
    method: 'collection',
    options: {
      body: params,
      method: 'PUT'
    }
  });
}

export function fetchLike(params) {
  return request({
    method: 'like',
    options: {
      method: 'PUT',
      body: params
    }
  });
}