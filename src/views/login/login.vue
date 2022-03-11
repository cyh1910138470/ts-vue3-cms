<template>
  <div class="login">
    <loginPanelVue></loginPanelVue>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginPanelVue from './cpns/loginPanel.vue'

export default defineComponent({
  name: '',
  components: {
    loginPanelVue
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.login {
  background: url('../../assets/img/login-bg.svg');
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
