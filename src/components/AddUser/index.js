import { connect, mutation, state } from 'zerotwo'
import AddUser from './AddUser.vue'

export default connect({
  data: state(),
  addUser: mutation()
})(AddUser)