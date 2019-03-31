import {
    request
} from '../request';

export function getCard() {
    return request({
        url: 'getCard',
        options: {
            method: 'GET'
        }
    });
}