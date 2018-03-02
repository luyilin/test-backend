<template>
  <li v-show="showAdd">
    <input name="name" placeholder="name" :class="{error: nameNeed}" v-model="name"/>
    <input name="email" placeholder="email" :class="{error: emailNeed}" v-model="email"/>
    <input v-if="!groupName" name="group" placeholder="group" :class="{error: groupNeed}" v-model="group"/>
    <span class="btn cancel" @click="cancel">cancel</span>
    <span class="btn submit" @click="add">add</span>
  </li>
</template>

<script>
import { addUser } from '../../api'
export default {
  name: 'AddUser',

  props: {
    showAdd: {
      type: Boolean,
      default: false
    },
    groupName: {
      type: String,
      default: ''
    },
    admin: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array
    },
    addUser: {
      type: Function
    }
  },

  data() {
    return {
      name: '',
      email: '',
      group: '',
      nameNeed: false,
      emailNeed: false,
      groupNeed: false
    }
  },

  methods: {
    cancel () {
      this.$emit('toggleAdd')
    },
    add () {
      this.nameNeed = !this.name
      this.emailNeed = !this.email
      this.groupNeed = !this.group
      let group = this.groupName || this.group
      if (!this.name || !this.email || !group) return
      addUser(this.name, this.email, this.admin, group).then(() => {
        this.addUser({
          name: this.name,
          email: this.email,
          admin: this.admin,
          department: group
        })
        this.$emit('toggleAdd')
      })
    }
  }
}
</script>

<style lang="scss">
li {
  list-style: none;
  line-height: 2.5;
  border-bottom: 1px dotted lightblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    padding: 8px 4px;
    border-radius: 3px;
    outline: none;
    border: 1px solid #ccc;
    &[name="email"] {
      width: 150px;
    }
    &.error {
      border: 1px solid var(--red);
    }
  }
}
.btn {
  line-height: 1;
  margin: 12px 0;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
}
.cancel {
  background-color: #a8a8a8;
  color: #fff
}
.submit {
  background-color: #5ccab9;
  color: #fff;
}
</style>
