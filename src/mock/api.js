let api = {}

api.userInfo = () => {
  return {
    name: 'luyilin',
    email: 'luyilin12@gmail.com',
    admin: true,
    department: 'admin'
  }
}

api.userList = () => {
  return [
    {
      name: 'luyilin',
      email: 'luyilin12@gmail.com',
      admin: true,
      department: 'admin'
    },
    {
      name: 'aa',
      email: 'aa@gmail.com',
      admin: false,
      department: '11'
    },
    {
      name: 'bb',
      email: 'bb@gmail.com',
      admin: false,
      department: '11'
    },
    {
      name: 'cc',
      email: 'cc@gmail.com',
      admin: false,
      department: '22'
    }
  ]
}

export default api
