<template>
  <div class="userInfo">
    <el-dropdown>
      <div class="userinfoUp">
        <!-- <span class="smallIcons">
          <Bell></Bell>
        </span>
        <span class="smallIcons">
          <ChatDotRound></ChatDotRound>
        </span>
        <span class="smallIcons">
          <CollectionTag></CollectionTag>
        </span> -->
        <span>
          <el-avatar
            shape="circle"
            :size="28"
            fit="fill"
            src="http://q2.qlogo.cn/headimg_dl?dst_uin=1910138470&spec=100"
          ></el-avatar>
        </span>
        <span class="el-dropdown-link">
          {{ userInfo.data.name }}
        </span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <div class="drop">
              <div class="icon"><CircleCloseFilled></CircleCloseFilled></div>
              <div class="text">退出登录</div>
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div class="drop">
              <div class="icon"><UserFilled></UserFilled></div>
              <div class="text">用户信息</div>
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div class="drop">
              <div class="icon"><Setting></Setting></div>
              <div class="text">系统管理</div>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  CircleCloseFilled,
  UserFilled,
  Setting,
  Bell,
  ChatDotRound,
  CollectionTag
} from '@element-plus/icons-vue'

export default defineComponent({
  name: '',
  components: {
    CircleCloseFilled,
    UserFilled,
    Setting,
    Bell,
    ChatDotRound,
    CollectionTag
  },
  props: {
    userInfo: {
      type: Object,
      default: {
        data: {
          name: 'default'
        }
      }
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.drop {
  display: flex;
  align-items: center;
}
.icon {
  width: 15px;
  height: 15px;
}
.text {
  margin-top: 3px;
  margin-left: 5px;
}
.userinfoUp {
  display: flex;
  align-items: center;
}
.el-dropdown-link {
  margin-left: 10px;
}
</style>
