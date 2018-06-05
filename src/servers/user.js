import { request } from '../request';

export function fetchRegister(params) {
  return request({
    method: 'register',
    options: {
      body: params.values,
      method: 'POST'
    }
  });
}

export function fetchUpdatePassword(params) {
  /*const { userName, password, confirm } = params.values;
  return request({
    //userName, password, confirm
    method: `updatePassword?userName=${userName}&password=${password}&confirm=${confirm}`,
    options: {
      body: {
        params: params.values,
      },
      method: 'PUT'
    }
  });*/
  return request({
    method: 'updatePassword',
    options: {
      method: 'PUT',
      body: params.values
    }
  });
}

export function fetchLogin(params) {
  const { userName, password, confirm } = params.values;
  return request({
    method: `login?userName=${userName}&password=${password}&confirm=${confirm}`,
    options: {
      method: 'GET'
    }
  });
}