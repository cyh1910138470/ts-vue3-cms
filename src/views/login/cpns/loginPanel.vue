<template>
  <div class="login-panel">
    <h1 class="login-panel-title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account_login">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><user-filled /></el-icon>
            <span> 账号登录</span>
          </span>
        </template>
        <loginAccountVue ref="accountRef"></loginAccountVue>
      </el-tab-pane>

      <el-tab-pane name="phone_login">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span> 手机登录</span>
          </span>
        </template>
        <loginPhoneVue ref="phoneRef"></loginPhoneVue>
      </el-tab-pane>
    </el-tabs>
    <div class="remember-psw">
      <el-checkbox v-model="isKeepPassword" label="记住密码" size="large">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div class="immediate-longin">
      <el-button type="primary" size="large" class="immediate-longin-index" @click="loginNow">立即登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import loginAccountVue from './loginAccount.vue'
import loginPhoneVue from './loginPhone.vue'
import { defineComponent, reactive, ref } from 'vue'
import { Calendar } from '@element-plus/icons-vue'
import { Edit } from '@element-plus/icons-vue'
import { UserFilled } from '@element-plus/icons-vue'
import { Iphone } from '@element-plus/icons-vue'

export default defineComponent({
  name: '',
  components: {
    Calendar,
    Edit,
    UserFilled,
    Iphone,
    loginAccountVue,
    loginPhoneVue
  },
  setup() {
    const isKeepPassword = ref(false)
    const currentTab = ref('account_login')
    const accountRef = ref<InstanceType<typeof loginAccountVue>>()
    const phoneRef = ref<InstanceType<typeof loginPhoneVue>>()
    const loginNow = () => {
      if(currentTab.value == "account_login") {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        phoneRef.value?.loginAction()
      }

    }
    return {
      isKeepPassword,
      loginNow,
      accountRef,
      currentTab,
      phoneRef
    }
  }
})
</script>

<style scoped>
.login-panel-body {
  display: block;
}
.red {
  color: red;
}
#ID,
#PSW,
#Phone,
#Iden {
  height: 30px;
}
.login-panel {
  text-align: center;
}
.demo-tabs {
  width: 320px;
  height: 190px;
}
.login-panel {
  margin-bottom: 150px;
}
input {
  outline: none;
}
#Iden {
  width: 100px;
}
.remember-psw {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 4px;
}

.immediate-longin .immediate-longin-index {
  width: 100%;
}
</style>
