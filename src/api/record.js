import request from '@/utils/request'

export function fetchRecordList(query) {
  return request({
    url: '/vue-element-admin/record/list',
    method: 'get',
    params: query
  })
}
