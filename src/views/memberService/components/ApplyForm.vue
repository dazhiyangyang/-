<template>
  <div class="icy-form">表格表单未写</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ApplyForm extends Vue {
  private data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        number: '',
        condition: []
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
.icy-icy-patenserviceadd {
  width: 100px;
  height: auto;
}

/deep/.el-dialog {
  width: 680px;
  height: 450px;
  background-color: #ffffff;
  font-family: 微软雅黑;
  border-radius: 5px;
}
/deep/.el-dialog__header {
  width: 680px;
  height: 46px;
  background-color: #3b69c6;
  padding: 0px;
}
/deep/.el-dialog__title {
  margin-top: 10px;
  margin-left: 27px;
  font-size: 18px;
  color: #e0e0e0;
  float: left;
}
/deep/ .el-input {
  width: 465px;
}
/deep/.el-dialog__headerbtn {
  top: 10px;
}
/deep/.el-icon-close:before {
  text-align: center;
  outline: 0px;
  font-size: 25px;
  color: #ffffff;
}
/deep/.el-dialog__body {
  text-align: right;
  padding: 34px 24px;
}
/deep/.el-form-item__label {
  width: 150px;
  height: 46px;
  text-align: right;
  font-size: 16px;
  color: #333333;
  padding: 0px;
  line-height: 46px;
  font-weight: normal;
  // padding-right: 20px;
}
/deep/ .el-radio-button {
  margin-right: 10px;
  width: 80px;
  height: 38px;
}
/deep/ .el-radio-button__inner {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: $font-size-base;
}
/deep/ .el-radio-button:last-child .el-radio-button__inner {
  border-radius: 4px;
}
/deep/.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background-color: $background-color-5b9bd5;
}
/deep/.el-form-item__content {
  text-align: left;
  width: 465px;
  margin-left: 160px;
}
/deep/.el-input__inner {
  // margin-left: -20px;
  padding: 0px 10px;
  height: 181px;
  // width: 400px;
  font-size: 16px;
  color: #757575;
  border-radius: 0%;
}
/deep/.el-dialog__footer {
  margin-top: -40px;
  height: 80px;
  margin-right: 13px;
}

/deep/.el-button {
  width: 70px;
  height: 36px;
  font-size: 14px;
  box-shadow: #f2f2f2;
}
/deep/.el-button--primary {
  background-color: #3b69c6;
  border-color: #3b69c6;
}
</style>
