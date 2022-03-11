<template>
  <el-form label-width="70px" :rules="rules" :model="Phone" ref="formRef">
    <el-form-item label="手机号" prop="phoneNumber">
      <el-input v-model="Phone.phoneNumber"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="verify" class="verify-code">
      <el-input v-model="Phone.verify"></el-input>
      <el-button
        v-if="isTrue"
        type="primary"
        class="get-verify-code"
        @click="getVertifyCode()"
        >获取验证码</el-button
      >
      <el-button
        v-else
        disabled
        type="primary"
        class="get-verify-code"
        @click="getVertifyCode()"
        >请{{ count }}s后再获取</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import rules from '../config/loginPhoneConfig'
import { useStore } from 'vuex'

export default defineComponent({
  name: '',
  setup() {
    let formRef = ref()
    const Phone = reactive({
      phoneNumber: '',
      verify: ''
    })
    const store = useStore()
    let count = ref(5)
    let isTrue = ref(true)
    const loginAction = () => {
      formRef.value?.validate((data: boolean) => {
        if (data) {
          store.dispatch('LoginModule/phoneLogin', {
            phoneNumber: Phone.phoneNumber,
            Verify: Phone.verify
          })
        }
      })
    }
    const getVertifyCode = () => {
      isTrue.value = !isTrue.value
      setTimeout(() => {
        count.value = 0
        isTrue.value = true
      }, 5000)
    }

    return {
      rules,
      Phone,
      getVertifyCode,
      isTrue,
      count,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped>
.verify-code {
  width: 150px;
  position: relative;
}
.get-verify-code {
  position: absolute;
  right: -140px;
}
</style>
