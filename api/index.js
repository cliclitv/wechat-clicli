import { request } from '../lib/request';

export function apiGetWeekUpdate (obj) {
  return request({
    url: 'posts',
    method: 'GET',
    data: obj
  })
}