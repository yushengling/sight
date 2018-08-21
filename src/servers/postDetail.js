import { request } from '../request';

export function fetchAvatar() {
  return request({
    method: 'personal',
    options: {
      method: 'GET'
    }
  });
}

export function fetchGetPostDetail(postId) {
  return request({
    method: `getPostDetail?postId=${postId}`,
    options: {
      method: 'GET'
    }
  });
}