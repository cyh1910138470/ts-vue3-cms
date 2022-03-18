<template>
  <div class="table">
    <div class="header">
      <div class="left">
        <h3>{{ title }}</h3>
      </div>
      <div class="right">
        <el-button size="small" type="primary">新增用户</el-button>
      </div>
    </div>
    <el-table
      :data="userList"
      :border="true"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column
        v-if="isShowIndex"
        type="index"
        width="80"
        label="序号"
      />
      <template v-for="item in propsList">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <div class="demo-pagination-block">
        <el-pagination
          :page-sizes="[100, 200, 300, 400]"
          small="small"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  props: {
    userList: {
      type: Array,
      required: true
    },
    propsList: {
      type: Array,
      required: true
    },
    isShowIndex: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    const handleSelectionChange = function (value: any) {
      console.log(value)
    }
    return {
      handleSelectionChange
    }
  }
})
</script>

<style scoped>
.table {
  width: 100%;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.5px solid #eee;
}
.header .left {
  margin-left: 20px;
}
.header .right {
  margin-right: 20px;
}
.footer {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
