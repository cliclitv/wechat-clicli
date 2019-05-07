import { request } from '../lib/request';

const apiGetWeekUpdate = function apiGetWeekUpdate (obj) {
  return request({
    url: 'posts',
    method: 'GET',
    data: obj
  })
}


module.exports = {
  apiGetWeekUpdate,
  
}