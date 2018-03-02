<template>
  <div class="group">
    <ul>
      <h2 class="title">
        <span>{{ department === 'admin' ? '管理员' : department }}</span>
        <i class="iconfont icon-add" @click="showAdd = !showAdd"></i>
      </h2>
      <li v-for="i in member" :key="i.email">
        <span>{{ i.name }}</span>
        <span>{{ i.email }}</span>
        <i class="iconfont icon-shanchu" @click="deleteMember(i)"></i>
      </li>
      <add-user :showAdd="showAdd" :groupName="department" @toggleAdd="showAdd = !showAdd"/>
    </ul>
    <v-dialog/>
  </div>
</template>

<script>
import { deleteUser } from '../../api/index'
import AddUser from '../AddUser/index'

export default {
  name: 'Group',

  props: {
    department: {
      type: String,
      default: ''
    },
    member: {
      type: Array,
      default: () => []
    },
    admin: {
      type: Boolean,
      default: false
    },
    data: {},
    deleteUser: {
      type: Function
    }
  },

  data() {
    return {
      name: '',
      email: '',
      showAdd: false,
      nameNeed: false,
      emailNeed: false
    }
  },

  components: {
    AddUser
  },

  methods: {
    deleteMember (i) {
      this.$modal.show('dialog', {
        text: `Are you sure to delete ${i.name} ?`,
        buttons: [
          {
            title: 'Cancel',
          },
          {
            title: 'Delete',
            handler: () => {
              deleteUser(i.email).then(() => {
                this.deleteUser(i.email)
                this.$modal.hide('dialog')
              })
            }
          }
        ]
      })
    }
  }
}
</script>

<style scoped lang="scss">
.group {
  margin-bottom: 50px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-right: 15px;
  }
}
.icon-shanchu {
  color: var(--red);
  padding: 5px;
  cursor: pointer;
}
</style>