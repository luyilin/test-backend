<template>
  <div class="content">
    <p v-if="noAuth">no auth</p>
    <group v-else v-for="i in departmentList" :key="i"
           :department="i"
           :admin="i === 'admin'"
           :member="memberList(i)"/>
    <i class="iconfont icon-add" @click="toggleAdd"/>
    <add-user :showAdd="showAdd"
              @toggleAdd="toggleAdd"
              :admin="false"/>
  </div>
</template>

<script>
import Group from '../Group/index'
import AddUser from '../AddUser/index'
import { userInfo, userList } from '../../api/index'

export default {
  name: 'Main',

  props: ['data', 'fetchUsers'],

  data() {
    return {
      adminList: [],
      noAuth: false,
      showAdd: false,
      name: '',
      email: '',
      group: '',
      nameNeed: false,
      emailNeed: false,
      groupNeed: false
    }
  },

  created () {
    userInfo().then((res) => {
      if (res.data.admin) {
        userList().then((res) => {
          let data = res.data
          this.fetchUsers(data)
        })
      } else {
        this.noAuth = true
      }
    }).catch(() => {
      location.href = process.env.BASE_URL + 'oauth/google?cb=http://' + location.host
    })
  },

  computed: {
    departmentList () {
      let temp = []
      for (let i = 0; i < this.data.length; i++) {
        let de = this.data[i].department
        if (temp.indexOf(de) === -1) {
          temp.push(de)
        }
      }
      let index = temp.indexOf('admin')
      if (index < 1) return temp
      temp.splice(index, 1)
      temp.unshift('admin')
      return temp
    }
  },

  components: {
    Group,
    AddUser
  },

  methods: {
    memberList (de) {
      return this.data.filter((i) => {
        if (i.department === de) return i
      })
    },
    toggleAdd () {
      this.showAdd = !this.showAdd
    }
  }
}
</script>

<style lang="scss">
:root {
  --red: #e43854;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.content {
  width: 72%;
  margin: 0 auto;
  padding: 0 10px;
  @media (max-width: 700px) {
    width: 100%
  }
}
.icon-add {
  font-size: 20px;
  color: lightblue;
  cursor: pointer;
}
</style>
