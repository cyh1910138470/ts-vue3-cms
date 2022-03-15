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
        </div>
      </template>
    </MyForm>
  </div>
  <div class="content"></div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { MyForm } from '../../../../base_ui/index'
import { propsType } from '../../../../base_ui/type'

export default defineComponent({
  name: 'user',
  components: {
    MyForm
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
    return {
      propsItems,
      formData
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
</style>
