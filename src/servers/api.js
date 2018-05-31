import { requestPost } from '../request';

export function fetchData(params) {
  return requestPost({
    method: 'home',
    options: {
      body: {
        count: params.count
      }
    }
  });
}

export function fetchCollection(params) {
  return requestPost({
    method: 'collection',
    options: {
      body: {
        params: params
      }
    }
  });
}

export function fetchLike(params) {
  return requestPost({
    method: 'like',
    options: {
      body: {
        params: params
      }
    }
  });
}