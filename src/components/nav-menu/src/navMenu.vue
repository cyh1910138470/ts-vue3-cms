<template>
  <div class="navMenu">
    <div class="logo">
      <img src="../../../assets/img/logo.svg" alt="vu3+ts" />
      <span v-show="!isCollapse" class="title">TS+VUE3</span>
    </div>
    <el-menu default-active="2" class="el-menu-vertical"
    background-color="#031524"
    text-color="#fff"
    active-text-color="aqua"
    :collapse="isCollapse"
    @open="handleOpen">
      <template v-for="item in userMenu" :key="item.id">
        <el-sub-menu v-if="item.type == 1" :key="item.id" :index="JSON.stringify(item.id)" class="submenu-margin">
          <template #title>
            <el-icon><operation/></el-icon>
            <span>{{item.name}}</span>
          </template>
          <template v-for="itemChildren in item.children">
            <el-sub-menu v-if="itemChildren.type == 1" :key="itemChildren.id" :index="JSON.stringify(itemChildren.id)" class="submenu-margin">
            <template #title>
              <span>{{itemChildren.name}}</span>
            </template>
            </el-sub-menu>

            <el-menu-item v-else :index="JSON.stringify(itemChildren.id)" class="submenu-margin" @click="routerclick(itemChildren.url)">
              <span @click="routerclick(itemChildren.url)">{{itemChildren.name}}</span>
            </el-menu-item>
          </template>

        </el-sub-menu>

        <el-menu-item v-else :index="JSON.stringify(item.id)" class="submenu-margin" @click="routerclick(item.url)">
          <span @click="routerclick(item.url)">{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { Operation } from '@element-plus/icons-vue'
import router from "../../../router/index"

export default defineComponent({
  name: '',
  components: {
    Operation
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    // const userMenu = store.state.LoginModule.menu
    const userMenu = computed(() => store.state.LoginModule.menu)
    console.log(userMenu)
    const handleOpen = (key: string, keyPath: string[]) => {
     console.log(key, keyPath)
    }
    const routerclick = (url: string) => {
      router.push(url)
    }
    return {
      userMenu,
      handleOpen,
      routerclick
    }
  }
})
</script>

<style scoped lang="less">
.navMenu {
  color: white;
  height: 100%;
}
.logo {
  display: flex;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.title {
  font-size: 16px;
  font-weight: 700;
}
img {
  width: 28px;
  margin: 0 10px;
}
/* .el-menu-item:hover {
  color: red !important;
} */

.el-menu-item.is-active {
  color: #fff !important;
  background-color: #0a60bd !important;
}

  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }
.el-menu {
  border-right: none;
}
</style>
