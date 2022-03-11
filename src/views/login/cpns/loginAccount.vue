<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"> </el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" show-password>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import rules from '../config/loginAccountConfig'
import { ElForm } from 'element-plus'
import LocalCache from '../../../utils/cache'

export default defineComponent({
  name: '',
  setup() {
    const store = useStore()
    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((data) => {
        if (data) {
          console.log('账号密码格式验证成功')
          if (isKeepPassword) {
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          } else {
            LocalCache.removeCache('name')
            LocalCache.removeCache('password')
          }
          store.dispatch('LoginModule/accountLogin', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped>
.el-link {
  margin-top: 0px;
}
</style>
