import { request } from '../request';

export function fetchAvatar() {
  return request({
    method: 'personal',
    options: {
      method: 'GET'
    }
  });
}

export function fetchImages(params) {
  return request({
    method: 'uploadImages',
    options: {
      method: 'PUT',
      body: params.formData,
      sign: true
    }
  });
}