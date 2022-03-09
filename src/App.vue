<template>
    <div class="app">
      <router-view/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
// import { ElButton } from "element-plus"
// import "element-plus/es/components/button/style/css"
export default defineComponent({
  // components: {
  //   ElButton
  // }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
