import { connect, state, mutation } from 'zerotwo'
import Main from './Main.vue'

export default connect({
  data: state(),
  fetchUsers: mutation(),
  addUser: mutation()
})(Main)