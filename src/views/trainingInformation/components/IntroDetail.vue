<template>
  <div class="icy-introdetail">
    <el-tabs type="card">
      <el-tab-pane label="课程概述">
        <div class="icy-introdetail__content">
          课程概述课程概述课程概述课程概述课程概述课程概述课程概述课程概述课程概述课程概述课程概述课程概述课程概述课程概述课程概述课程概述课程概述课程概述课程概述课程概述
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/**
 *pei详情页
 * @author qinhuan
 */
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class IntroDetail extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.icy-introdetail {
  &__content {
    padding: 40px;
  }
  /deep/ .el-tabs--card > .el-tabs__header {
    background: $color-white3;
  }
  /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
    background: $color-white;
    border-radius: 0;
    color: $color-dark-blue-2650a6;
    font-size: $font-size-base;
    border-top: 2px solid $color-dark-blue-2650a6;
  }
}
</style>
