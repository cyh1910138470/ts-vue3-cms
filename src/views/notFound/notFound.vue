<template>
  <div class="notFound">
    <img src="../../assets/img/notFound.jpg" alt="">
    <!-- <h1>当前访问的页面不存在</h1> -->
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'notFound',
  setup() {
    return {}
  }
})
</script>

<style scoped>
.notFound {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
}
img {
  width: 60%;
  height: 70%;
  /* margin-left: 320px; */
}
</style>
