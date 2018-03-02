import Mock from 'mockjs'
import api from './api'

if (process.env.NODE_ENV === 'development') {
  Mock.mock(/\/user\/info/, 'get', api.userInfo)
  Mock.mock(/\/user\/list/, 'get', api.userList)
  Mock.mock(/\/user\/signup/, 'get', api.success)
  Mock.mock(/\/user\/del/, 'get', api.success)
}
