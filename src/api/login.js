import request from '@/utils/request'

const api = {
  loginIn: '/login/in',
  loginOut: '/login/out'
}

export function loginIn(data) {
  return request({
    url: api.loginIn,
    method: 'post',
    data
  })
}
