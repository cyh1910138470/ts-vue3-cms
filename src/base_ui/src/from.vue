<template>
  <div class="myform">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form class="elform">
      <el-row :gutter="20">
        <template v-for="item in propsItems" :key="item.label">
          <el-col v-bind="colLayout">
            <template v-if="item.type === 'input'">
              <el-form-item
                :label="item.label"
                :label-width="labelWidth"
                class="form-item"
              >
                <el-input :placeholder="item.placeholder" v-model="formData[`${item.filed}`]"></el-input>
              </el-form-item>
            </template>

            <template v-else-if="item.type === 'password'">
              <el-form-item
                :label="item.label"
                :label-width="labelWidth"
                class="form-item"
              >
                <el-input
                  :placeholder="item.placeholder"
                  type="password"
                  show-password
                  v-model="formData[`${item.filed}`]"
                ></el-input>
              </el-form-item>
            </template>

            <template v-else-if="item.type === 'select'">
              <el-form-item
                :label="item.label"
                :label-width="labelWidth"
                class="form-item"
              >
                <el-select :placeholder="item.placeholder" style="width: 100%" v-model="formData[`${item.filed}`]">
                  <el-option
                    v-for="optionsItems in item.options"
                    :label="optionsItems.title"
                    :value="optionsItems.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </template>

            <template v-else-if="item.type === 'datepicker'">
              <el-form-item
                :label-width="labelWidth"
                :label="item.label"
                class="form-item"
              >
                <div class="demo-date-picker" style="width: 100%">
                  <el-date-picker
                    type="date"
                    :placeholder="item.placeholder"
                    style="width: 100%"
                    v-model="formData[`${item.filed}`]"
                  >
                  </el-date-picker>
                </div>
              </el-form-item>
            </template>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { propsType } from '../type'

export default defineComponent({
  name: '',
  props: {
    formData: {
      type: Object,
      required: true
    },
    propsItems: {
      type: Array as PropType<propsType[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "100px"
    },
    colLayout: {
      type: Object,
      default: () => ({
        xs: 24,
        md: 12,
        lg: 8
      })
    }
  },
  setup() {
    return {

    }
  }
})
</script>

<style scoped>
.myform {
  padding-top: 22px;
}
.form-item {
  padding: 10px 60px;
}

</style>
