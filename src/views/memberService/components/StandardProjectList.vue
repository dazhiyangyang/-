<template>
  <div class="icy-standardprojectlist">
    <div class="icy-standardprojectlist__search">
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
    </div>
    <div class="icy-standardprojectlist__add">
      <Button @click="goToAdd">新增</Button>
    </div>
    <el-table
      border
      stripe
      :data="tableData"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
      :row-style="{ height: '50px' }"
      style="width: 1100px"
    >
      <el-table-column prop="date" label="申请企业" width="180"></el-table-column>
      <el-table-column prop="name" label="立项标准" width="180"></el-table-column>
      <el-table-column prop="address" label="立项状态"></el-table-column>
      <el-table-column prop="address" label="操作"></el-table-column>
    </el-table>

    <div class="icy-standardprojectlist__page">
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
export default class StandardProjectList extends Vue {
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

  /** 跳转到新增标准立项 */
  private goToAdd(): void {
    this.$router.push('/memberService/standardProject/projectAdvice')
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.icy-standardprojectlist {
  padding-top: 46px;
  &__search {
    width: 1100px;
    margin: 0 auto;
    text-align: left;
  }
  &__add {
    width: 1100px;
    margin: 0 auto;
    text-align: left;
    padding-bottom: 20px;
    button {
      width: 90px;
      height: 40px;
      background: $font-color-3db4ba;
      color: $color-white;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  &__page {
    text-align: center;
    padding-top: 40px;
  }
}
</style>
