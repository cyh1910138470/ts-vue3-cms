<template>
  <div class="navHead">
    <el-icon class="unfold" v-if="isFolding" @click="changeFoldState"
      ><expand
    /></el-icon>
    <el-icon class="fold" v-else @click="changeFoldState"><fold /></el-icon>
    <div class="content">
      <div class="bread">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="user">
        <userInfo :userInfo="userInfo"></userInfo>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import userInfo from './userInfo.vue'
import { useStore } from 'vuex'
import LocalCache from '../../../utils/cache'
import { useRoute } from 'vue-router'
import { getBread } from '../../../utils/mapMenus'

export default defineComponent({
  name: '',
  components: {
    Fold,
    Expand,
    userInfo
  },
  emits: ['foldChange'],
  setup(props, context) {
    const isFolding = ref(false)
    const changeFoldState = () => {
      isFolding.value = !isFolding.value
      context.emit('foldChange', isFolding.value)
    }
    const store = useStore()
    // const userInfo = store.state.LoginModule.userInfo
    //不可用 userInfo获取不到
    const userInfo = LocalCache.getCache('userInfo')
    console.log(userInfo)
    // const menu = computed(() => store.state.LoginModule.menu)
    const menu = store.state.LoginModule.menu

    const route = useRoute()
    console.log(route.path)
    const arr = getBread(menu, route.path)
    console.log(menu)
    console.log('*******')
    console.log(arr)
    console.log('*******')
    return {
      isFolding,
      changeFoldState,
      userInfo,
      arr
    }
  }
})
</script>

<style scoped>
.el-icon.fold,
.el-icon.unfold {
  cursor: pointer;
  font-size: 30px;
}
.navHead {
  width: 100%;
  display: flex;
}
.content {
  display: flex;
  flex: 1;
  margin-left: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.user {
  margin-right: 20px;
}
</style>
