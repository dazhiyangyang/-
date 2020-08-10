<template>
  <div class="icy-patentserviceadd icy-content__container">
    <div>
      <span class="icy-patentserviceadd__title">专利服务申请表</span>
      <div class="icy-patentserviceadd__external">
        <!-- 提交申请 图案-->
        <p class="icy-patentserviceadd__one">
          <span class="icy-patentserviceadd__one--app">1</span>
        </p>
        <!-- 审批发布 图案-->
        <p class="icy-patentserviceadd__two">
          <span class="icy-patentserviceadd__two--rele">2</span>
        </p>
      </div>
      <div class="icy-patentserviceadd__column">
        <!-- 提交申请 -->
        <p class="icy-patentserviceadd__column--app">1.提交申请</p>
        <!-- 审批发布 -->
        <p class="icy-patentserviceadd__column--rele">2.审批发布</p>
      </div>
    </div>
    <!-- 表单 -->
    <span class="icy-patentserviceadd__formtitle">基本维护信息</span>
    <el-form
      class="patentserviceaddform"
      :inline="true"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="类型:" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专利内容:" prop="content">
        <el-input v-model="ruleForm.content"></el-input>
      </el-form-item>
      <el-form-item label="申请企业:" prop="enterprise">
        <el-input v-model="ruleForm.enterprise"></el-input>
      </el-form-item>
      <el-form-item label="审批状态:" prop="status">
        <el-select v-model="ruleForm.status" placeholder="请选择活动区域">
          <el-option label="区域一" value="1"></el-option>
          <el-option label="区域二" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专利名称:" prop="patentName">
        <el-input v-model="ruleForm.patentName"></el-input>
      </el-form-item>
      <div class="icy-patentserviceadd__button">
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </div>
    </el-form>
    <!-- 点击提交展示的弹框 -->
    <PatentServiceAddModal :dialogVisible="dialogVisible" @dialogVisibleChild="dialogVisibleChild" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PatentServiceAddModal from './PatentServiceAddModal.vue'
@Component({
  components: {
    PatentServiceAddModal
  }
})
export default class PatentServiceAdd extends Vue {
  private dialogVisible = false // 谈款显示与否
  ruleForm: any = {
    type: '',
    content: '',
    enterprise: '',
    status: 0,
    patentName: ''
  }
  rules: any = {
    type: [{ type: 'string', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
    status: [{ type: 'number', required: true, message: '请至少选择一个活动性质', trigger: 'change' }]
  }
  submitForm(ruleForm: any) {
    this.dialogVisible = true
  }

  private dialogVisibleChild(val: boolean) {
    this.dialogVisible = val
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
.icy-patentserviceadd {
  padding-bottom: 60px;

  &__title {
    display: inline-block;
    width: 1200px;
    text-align: center;
    font-size: $font-size-largest-30;
    color: $color-base;
    margin-top: 53px;
  }
  &__external {
    display: flex;
    width: 1200px;
    margin-top: 40px;
  }
  &__one {
    width: 166px;
    height: 4px;
    background-color: $font-color-3db4ba;
    margin-left: 50px;
    &--app {
      display: block;
      border-radius: 50px;
      height: 30px;
      width: 30px;
      background-color: $font-color-3db4ba;
      line-height: 30px;
      margin-left: 68px;
      margin-top: -13px;
      font-size: $font-size-large;
      color: $color-white;
    }
  }
  &__two {
    width: 166px;
    height: 4px;
    background-color: $color-gray-ededed;
    &--rele {
      display: block;
      border-radius: 50px;
      height: 30px;
      width: 30px;
      background-color: $color-gray-cdcdcd;
      line-height: 30px;
      margin-left: 68px;
      margin-top: -13px;
      font-size: $font-size-large;
      color: $color-white;
    }
  }
  &__column {
    display: flex;
    width: 1200px;
    margin-top: 22px;
    margin-left: 50px;
    &--app {
      width: 166px;
      color: $font-color-3db4ba;
    }
    &--rele {
      width: 166px;
      color: $color-gray-999;
    }
  }
  &__formtitle {
    display: inline-block;
    width: 1200px;
    margin-top: 26px;
    margin-bottom: 26px;
    font-size: $font-size-large;
    text-align: left;
    margin-left: 50px;
    font-weight: bold;
  }

  &__button {
    margin-top: 20px;
    width: 1200px;
  }

  /deep/.patentserviceaddform.el-form {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
  }

  /deep/ .patentserviceaddform.el-form--inline .el-form-item {
    width: 500px;
    margin: 0 0 20px 40px;
  }
  /deep/ .patentserviceaddform .el-input__inner {
    width: 400px;
    height: 46px;
  }
  /deep/ .patentserviceaddform .el-form-item__content {
    width: 400px;
  }
  /deep/ .patentserviceaddform .el-form-item__label {
    // margin-right: 38px;
    margin-left: 0px;
  }

  /deep/ .patentserviceaddform .el-button {
    width: 180px;
    height: 40px;
    background-color: $color-dark-blue-2650a6;
    font-size: $font-size-large;
  }
}
</style>
