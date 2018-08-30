import { request } from '../request';

export function fetchAvatar() {
  return request({
    url: 'personal',
    options: {
      method: 'GET'
    }
  });
}

export function fetchGetPostDetail(postId) {
  return request({
    url: `getPostDetail?postId=${postId}`,
    options: {
      method: 'GET'
    }
  });
}