import request from '../utils/request'

export function userInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function userList() {
  return request({
    url: '/user/list',
    method: 'get'
  })
}

export function addUser(name, email, admin, department) {
  const params = {
    name,
    email,
    admin,
    department
  }
  return request({
    url: '/user/signup',
    method: 'get',
    params
  })
}

export function deleteUser(email) {
  const params = {
    email
  }
  return request({
    url: '/user/del',
    method: 'get',
    params
  })
}
