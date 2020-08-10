<template>
  <div class="icy-applyrecord">
    <el-form :inline="true" class="icy-content__form--inline">
      <el-form-item label="申请企业">
        <el-input placeholder="申请企业"></el-input>
      </el-form-item>
      <el-form-item label="立项标准">
        <el-input placeholder="立项标准"></el-input>
      </el-form-item>
      <el-form-item label="立项状态">
        <el-select placeholder="全部">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      border
      stripe
      :data="tableData"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
      :row-style="{ height: '50px' }"
      style="width: 1100px"
    >
      <el-table-column prop="date" label="类型" width="180"></el-table-column>
      <el-table-column prop="name" label="申请企业" width="180"></el-table-column>
      <el-table-column prop="address" label="立项标准"></el-table-column>
      <el-table-column prop="address" label="立项状态"></el-table-column>
    </el-table>
    <div class="icy-applyrecord__page">
      <el-pagination
        class="icy-page"
        background
        layout="prev, pager, next"
        :total="1000"
        prev-text="上一页"
        next-text="下一页"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class ApplyRecord extends Vue {
  private tableData: any = [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    },
    {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    },
    {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }
  ]
}
</script>

<style scoped lang="scss">
.icy-applyrecord {
  padding-top: 30px;
  padding-bottom: 60px;
  .icy-content__form--inline {
    width: 1100px;
    margin: 0 auto;
    text-align: left;
  }
  .icy-applyrecord__add {
    width: 1100px;
    margin: 0 auto;
    text-align: left;
    .icy-content__form--add {
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
  &__page {
    text-align: center;
    padding-top: 40px;
  }
}
</style>
