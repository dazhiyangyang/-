<template>
  <div class="icy-detail">
    <p class="icy-detail__title">XZJ5320JQJ22桁架式桥梁检测车</p>
    <p class="icy-detail__symbol"></p>
    <table class="icy-table">
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">专业分组：</td>
        <td class="icy-table__row1--secondgrid">工程机械</td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">年度：</td>
        <td class="icy-table__row1--secondgrid">2011年</td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">奖项：</td>
        <td class="icy-table__row1--secondgrid">三等奖</td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">单位名称：</td>
        <td class="icy-table__row1--secondgrid">徐州徐工随车起重机有限公司</td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">获奖者：</td>
        <td class="icy-table__row1--secondgrid">陈维 程磊 陈宝凤 陈志伟 刘宏超</td>
      </tr>

      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">单位名称：</td>
        <td class="icy-table__row2--secondgrid">
          实用新型公开了- -种新型桁架式桥梁检测车 属于特种车辆,现有桁架式桥梁检测车的桁
          架式工作臂跨越长度不足,本实用新型包括车体和桁架式工作臂,在车体上设置有转台，
          该转台.上相对设置有伸缩配重和伸缩臂,桁架式工作臂安装在伸缩臂上其用可伸缩的转
          台可以有效的扩大工作臂的跨越宽度提高工作范围从而可以跨越带有人行道的桥梁,
          进行施工操作.由于跨度可变桁架式桥梁检测车的适用范围进一步扩 大采用可伸缩的
          配重可以有效的增加配重的力臂,从而达到减小配重质量，,并保证整车倾翻稳定性的要求
          以桥梁检测车为研究对象,对其检测臂架进行结构设计,研究和探讨桥梁检测车的开
          发及应用.根据基本参数确定桥梁检测车的总体设计方案和桁架机构设计方案,建立桥梁
          检测车Solidworks实体模型,并对检测臂各部件结构进行设计与计算;应用Solidworks
          软件对桥梁检测桁架机构进行虚拟装配和运动学仿真研究.结果表明:各桁架结构满足强
          度要求,设计合理,可为下一步研发新型桥梁检测车奠定理论基础..
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
/**
 *科技奖励-获奖项目详情
 * @author wyr
 */
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Datail extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
/** 获奖项目 */
.icy-detail {
  width: 880px;
  height: auto;
  padding: 56px 34px 80px;
  /**标题 */
  &__title {
    font-family: '微软雅黑';
    font-size: 36px;
    font-weight: bold;
    color: $font-color-07519a;
  }
  /**红色图标 */
  &__symbol {
    display: flex;
    width: 812px;
    height: 2px;
    margin-top: 46px;
    background-color: $color-red1;
  }
  /**表格 */
  .icy-table {
    border-collapse: collapse;
    margin-top: 40px;
    width: 812px;
    height: 706px;
    border: 1px solid $border-color-c1dbf0;
    font-family: '微软雅黑';
    font-size: 16px;
    color: $color-base;

    /**第一种行样式 */
    &__row1 {
      border: 1px solid $border-color-c1dbf0;
      height: 54px;
      text-align: left;

      /**第一个表格 */
      &--firstgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 142px;
        background-color: $background-color-f0f6fb;
        padding: 0px 0px 0px 15px;
        color: $font-color-e9100e;
      }
      &--secondgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 670px;
        padding: 0px 0px 0px 15px;
      }
    }
    /**第二种行样式 */
    &__row2 {
      border: 1px solid $border-color-c1dbf0;
      height: 436px;
      text-align: left;
      vertical-align: top;
      &--firstgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 142px;
        background-color: $background-color-f0f6fb;
        padding: 15px 0px 0px 15px;
        color: $font-color-e9100e;
      }
      &--secondgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 670px;
        padding: 15px 0px 0px 15px;
      }
    }
  }
}
</style>
