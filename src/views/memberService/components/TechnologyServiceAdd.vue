<template>
  <div class="icy-technologyserviceadd">
    <el-button type="text" @click="dialogVisible = true">新增技术服务</el-button>
    <el-dialog title="新增" :visible.sync="dialogVisible">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="企业名称:">
          <el-input v-model="form.name" placeholder="请输入企业名称"></el-input>
        </el-form-item>
        <el-form-item label="所需服务:">
          <el-input v-model="form.number" placeholder="请输入所需服务"></el-input>
        </el-form-item>
        <el-form-item label="进展状态:">
          <el-select v-model="form.condition" placeholder="申请中">
            <el-option></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TechnologyServiceAdd extends Vue {
  private data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        number: '',
        condition: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.icy-technologyserviceadd {
  width: 100px;
  height: auto;
}

/deep/.el-dialog {
  width: 560px;
  background-color: #ffffff;
  font-family: 微软雅黑;
  border-radius: 5px;
}
/deep/.el-dialog__header {
  width: 560px;
  height: 46px;
  background-color: #3b69c6;
  padding: 0px;
}
/deep/.el-dialog__title {
  margin-top: 10px;
  margin-left: 22px;
  font-size: 18px;
  color: #e0e0e0;
  float: left;
}
/deep/ .el-input {
  width: 400px;
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
  padding: 30px 24px;
}
/deep/.el-form-item__label {
  height: 46px;
  text-align: left;
  font-size: 16px;
  color: #333333;
  padding: 0px;
  line-height: 46px;
  font-weight: normal;
  // padding-right: 20px;
}
/deep/.el-form-item__content {
  margin-left: 70px;
}
/deep/.el-input__inner {
  // margin-left: -20px;
  padding: 0px 10px;
  height: 48px;
  // width: 400px;
  font-size: 16px;
  color: #757575;
  border-radius: 0%;
}
/deep/.el-dialog__footer {
  margin-top: -30px;
  height: 80px;
}

/deep/.el-icon-arrow-up:before {
  content: none;
}
/deep/.el-select .el-input .el-select__caret {
  margin-right: 10px;
  margin-top: 20px;
  width: 0px;
  height: 8px;
  border: 8px solid;
  border-color: #666 transparent transparent transparent;
  transform: rotateZ(0deg);
}

/deep/.el-popper .popper__arrow::after {
  content: none;
}

/deep/ .el-select {
  width: 400px;
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
