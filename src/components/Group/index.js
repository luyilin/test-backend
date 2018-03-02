import { connect, mutation, state } from 'zerotwo'
import Group from './Group.vue'

export default connect({
  data: state(),
  addUser: mutation(),
  deleteUser: mutation()
})(Group)