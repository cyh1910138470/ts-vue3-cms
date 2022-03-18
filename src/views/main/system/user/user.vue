<template>
  <div class="search">
    <MyForm :propsItems="propsItems" :formData="formData">
      <template #header>
        <h3>检索</h3>
      </template>
      <template #footer>
        <div class="handlebtns">
          <el-button type="primary">重置</el-button>
          <el-button type="success">搜索</el-button>
          <el-button type="success" @click="changeIndex">序列号</el-button>
        </div>
      </template>
    </MyForm>
  </div>
  <div class="content">
    <MyTable :userList="userList" :propsList="propsList" :isShowIndex="isShowIndex" :title="title">
      <template #status="scope" >
        <el-button size="small" :type="scope.row.enable ? 'success' : 'danger'">{{scope.row.enable ? "启用" : "禁用"}}</el-button>
      </template>
      <template #createAt="scope">
        <strong>{{$filters.timeformat(scope.row.createAt)}}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{$filters.timeformat(scope.row.updateAt)}}</strong>
      </template>
      <template #operate>
        <el-button size="small" type="primary">编辑</el-button>
        <el-button size="small" type="danger">删除</el-button>
      </template>
    </MyTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from 'vue'
import { MyForm } from '../../../../base_ui/index'
import { propsType } from '../../../../base_ui/type'
import { useStore } from 'vuex'
import MyTable from "../../../../base_ui/table/index"

export default defineComponent({
  name: 'user',
  components: {
    MyForm,
    MyTable
  },
  setup() {
    const formData = reactive({
      createTime: '',
      name: '',
      password: '',
      sports: '',
      fruits: '',
      jionTime: ''
    })
    const propsItems: propsType[] = [
      {
        filed: 'name',
        type: 'input',
        label: 'username',
        placeholder: '请输入用户名'
      },
      {
        filed: 'password',
        type: 'password',
        label: 'password',
        placeholder: '请输入密码'
      },
      {
        filed: 'sports',
        type: 'select',
        label: 'sports',
        placeholder: '请输入sports',
        options: [
          { title: '1111', value: 'AAAA' },
          { title: '2222', value: 'BBBB' },
          { title: '3333', value: 'CCCC' },
          { title: '4444', value: 'DDDD' },
          { title: '5555', value: 'EEEE' },
          { title: '6666', value: 'FFFF' }
        ]
      },
      {
        filed: 'createTime',
        type: 'datepicker',
        label: 'createdate',
        placeholder: '请输入创建时间'
      },
      {
        filed: 'jionTime',
        type: 'datepicker',
        label: 'joindate',
        placeholder: '请输入加入时间'
      },
      {
        filed: 'fruits',
        type: 'select',
        label: 'fruits',
        placeholder: '请输入fruits',
        options: [
          { title: 'AAAA', value: 'AAAA' },
          { title: 'BBBB', value: 'BBBB' },
          { title: 'CCCC', value: 'CCCC' },
          { title: 'DDDD', value: 'DDDD' },
          { title: 'EEEE', value: 'EEEE' },
          { title: 'FFFF', value: 'FFFF' }
        ]
      }
    ]
    const store = useStore()
    store.dispatch('systemModule/getPageListAction', {
      path: '/users/list',
      queryInfo: {
        offset: 0,
        size: 100
      }
    })
    const userList = computed(() => store.state.systemModule.userList)
    const userCount = computed(() => store.state.systemModule.userCount)
    const title = "用户列表"
    const propsList = [
      {prop: "name", label: "用户名", minWidth: "100"},
      {prop: "realname", label: "真是姓名", minWidth: "100"},
      {prop: "cellphone", label: "用户电话", minWidth: "150"},
      {prop: "enable", label: "状态", minWidth: "60", slotName: "status"},
      // {prop: "departmentId", label: "用户部门", minWidth: "60"},
      {prop: "createAt", label: "创建时间", minWidth: "150", slotName: "createAt"},
      {prop: "updateAt", label: "更新时间", minWidth: "150", slotName: "updateAt"},
      {prop: "operate", label: "操作", minWidth: "100", slotName: "operate"}
    ]
    let isShowIndex = ref(true)
    const changeIndex = function() {
      isShowIndex.value = !isShowIndex.value
    }
    return {
      propsItems,
      formData,
      userList,
      userCount,
      propsList,
      isShowIndex,
      changeIndex,
      title
    }
  }
})
</script>

<style scoped>
.handlebtns {
  text-align: right;
  padding-bottom: 30px;
  padding-right: 60px;
  margin-top: 30px;
}
.content {
  display: flex;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
}
</style>
