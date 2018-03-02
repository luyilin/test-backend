export const state = {
  data: []
}

export const mutations = {
  fetchUsers (state, users) {
    state.data = users
  },
  addUser (state, ...args) {
    state.data.push(...args)
  },
  deleteUser (state, email) {
    state.data = state.data.filter((i) => {
      if (email !== i.email) return i
    })
  }
}
