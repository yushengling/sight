import { request } from '../request';

export function fetchRegister(params) {
  return request({
    url: 'register',
    options: {
      body: params.values,
      method: 'POST'
    }
  });
}

export function fetchUpdatePassword(params) {
  return request({
    url: 'updatePassword',
    options: {
      method: 'PUT',
      body: params.values
    }
  });
}

export function fetchLogin(params) {
  const { userName, password, confirm } = params.values;
  return request({
    url: `login?userName=${userName}&password=${password}&confirm=${confirm}`,
    options: {
      method: 'GET'
    }
  });
}

export function fetchCode(params) {
  const { number, phone } = params;
  return request({
    url: `code?phone=${phone}&number=${number}`,
    options: {
      method: 'GET'
    }
  });
}