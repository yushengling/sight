import { request } from '../request';

export function fetchAvatar() {
  return request({
    method: 'detail',
    options: {
      method: 'GET'
    }
  });
}