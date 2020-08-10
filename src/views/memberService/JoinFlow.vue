<template>
  <div class="icy-joinflow icy-content__container">
    <!--流程图区域 -->
    <div class="icy-flow">
      <!-- 框图-->
      <div class="icy-flow__firstblockdiagram">
        <!-- 框图内容-->
        <span class="icy-flow__firstblockdiagram--text">入会申请</span>
        <!-- 下划线-->
        <p class="icy-flow__firstblockdiagram--underline"></p>
      </div>
      <!-- 箭头照片-->
      <img class="icy-flow__img1" src="@/assets/images/joinFlow_arrowhead.png" />
      <div class="icy-flow__secondblockdiagram">选择智能制造分会</div>
      <img class="icy-flow__img1" src="@/assets/images/joinFlow_arrowhead.png" />
      <div class="icy-flow__thirdblockdiagram">分会线下审批</div>
      <img class="icy-flow__img2" src="@/assets/images/joinFlow_arrowhead.png" />
      <div class="icy-flow__fourthblockdiagram">反馈结果</div>
      <div class="icy-flow__div">
        <!-- 通过-->
        <p class="icy-flow__div--pass">通过</p>
        <img class="icy-flow__div--img3" src="@/assets/images/joinFlow_arrowhead.png" />
      </div>
      <div class="icy-flow__secondblockdiagram">发布入会公式标准</div>
      <img class="icy-flow__img4" src="@/assets/images/joinFlow_arrowhead.png" />
      <!--驳回-->
      <p class="icy-flow__reject">驳回</p>
      <div class="icy-flow__sixthblockdiagram">修改重新申请</div>
    </div>
    <!--流程注释区域-->
    <div class="icy-annotation">
      <!--标题-->
      <div class="icy-annotation__title">
        <!--中文-->
        <p class="icy-annotation__title--symbol"></p>
        <p class="icy-annotation__title--chinese">流程注释</p>
        <!--英文-->
        <p class="icy-annotation__title--english">Process notes</p>
      </div>
      <!--段落区域-->
      <div class="icy-annotation__text">
        <p class="icy-annotation__text--bold">入会申请:</p>
        <p class="icy-annotation__text--normal">入会前需要填写申请表，会员需要填入一些个人相关的重要信息;</p>
      </div>
      <div class="icy-annotation__text2">
        <p class="icy-annotation__text2--bold">选择智能制造分会:</p>
        <p class="icy-annotation__text2--normal">入会申请表中可以选择分会机构;</p>
      </div>
      <div class="icy-annotation__text3">
        <p class="icy-annotation__text3--bold">分会线下审批:</p>
        <p class="icy-annotation__text3--normal">分会审批人需要线下综合比对信息,线下进行审批;</p>
      </div>
      <div class="icy-annotation__text4">
        <p class="icy-annotation__text4--bold">反馈结果:</p>
        <p class="icy-annotation__text4--normal">
          分会审批完成后,给申请人反馈最终结果,如果通过:发布入会公示;如果不通过,通知申请人修改信息重新申情。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class JoinFlow extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.icy-joinflow {
  padding-top: 30px;
  /**流程图 */
  .icy-flow {
    width: 1160px;
    height: 340px;
    margin: 0 auto;
    background-image: url(../../assets/images/joinFlow_flowbottom.png);
    display: flex;

    padding: 65px 0px 0px 0px;
    /*第一个框图*/
    &__firstblockdiagram {
      padding: 10px;
      margin-top: 10px;
      margin-left: 60px;
      width: 108px;
      height: 50px;
      background-color: $background-color-5b9bd5;
      border-radius: 4px;

      &--text {
        width: 108px;
        height: 25px;
        margin-top: 11px;
        font-family: '微软雅黑';
        font-size: $font-size-base;
        font-weight: bold;
        color: $font-color-bbfff9;
      }
      &--underline {
        margin-left: 12px;
        margin-top: 3px;
        width: 64px;
        height: 1px;
        background-color: $font-color-bbfff9;
      }
    }
    /*第一、二、个箭头样式*/
    &__img1 {
      margin-top: 27px;
      margin-left: 12px;
      width: 50px;
      height: 18px;
    }
    /*第二,五个框图*/
    &__secondblockdiagram {
      margin-top: 10px;
      margin-left: 10px;
      width: 180px;
      height: 50px;
      background-color: $background-color-5b9bd5;
      border-radius: 4px;
      font-weight: bold;
      font-size: $font-size-base;
      color: $color-white;
      text-align: center;
      line-height: 50px;
    }
    /*第三个框图*/
    &__thirdblockdiagram {
      margin-top: 10px;
      margin-left: 10px;
      width: 140px;
      height: 50px;
      background-color: $background-color-5b9bd5;
      border-radius: 4px;
      font-weight: bold;
      font-size: $font-size-base;
      color: $color-white;
      text-align: center;
      line-height: 50px;
    }
    /*第三个箭头样式*/
    &__img2 {
      margin-top: 27px;
      margin-left: 12px;
      width: 70px;
      height: 18px;
    }
    /*第四个框图*/
    &__fourthblockdiagram {
      margin-top: 10px;
      margin-left: 10px;
      width: 108px;
      height: 50px;
      background-color: $background-color-5b9bd5;
      border-radius: 4px;
      font-weight: bold;
      font-size: $font-size-base;
      color: $color-white;
      text-align: center;
      line-height: 50px;
    }
    /*通过区域模块 */
    &__div {
      width: 70px &--pass {
        width: 70px;
        height: 20px;
        float: left;
        color: $font-color-3db4ba;
        font-family: '微软雅黑';
        font-size: $font-size-base;
      }
      /*通过样式 */
      &--pass {
        width: 70px;
        height: 20px;

        color: $font-color-3db4ba;
        font-family: '微软雅黑';
        font-size: $font-size-base;
      }
      /*第四个箭头样式*/
      &--img3 {
        margin-top: 8px;
        margin-left: 12px;
        width: 70px;
        height: 18px;
      }
    }
    /**90°箭头 */
    &__img4 {
      margin-top: 105px;
      margin-left: -366px;
      width: 80px;
      height: 22px;
      -webkit-transform: rotate(90deg);
    }
    /**驳回样式 */
    &__reject {
      margin-top: 90px;
      margin-left: -25px;
      width: 40px;
      height: 20px;
      font-size: $font-size-base;
      color: $color-red;
      font-family: '微软雅黑';
    }
    /**第六个框图 */
    &__sixthblockdiagram {
      margin-top: 165px;
      margin-left: -125px;
      width: 140px;
      height: 50px;
      background-color: $background-color-5b9bd5;
      border-radius: 4px;
      font-weight: bold;
      font-size: $font-size-base;
      color: $color-white;
      text-align: center;
      line-height: 50px;
    }
  }
  /**流程注释 */
  .icy-annotation {
    width: 1200px;
    height: auto;
    margin: 30px auto;
    padding-bottom: 160px;

    &__title {
      width: 1200px;
      display: flex;
      /**蓝色标签 */
      &--symbol {
        width: 10px;
        background-color: $color-dark-blue-2650a6;
        height: 32px;
      }
      /**中文标题 */
      &--chinese {
        font-family: '微软雅黑';
        margin-left: 30px;

        font-size: $font-size-largest-24;
        color: $color-dark-blue-2650a6;
      }
      /**英文标题*/
      &--english {
        margin-top: 6px;
        margin-left: 12px;
        font-size: $font-size-large;
        color: $color-dark-blue-2650a6;
      }
    }
    /**文本第一段 */
    &__text {
      width: 1200px;
      height: 20px;
      margin-top: 40px;
      font-size: $font-size-base;
      font-family: '微软雅黑';
      color: $color-base;
      display: flex;
      /**加粗 */
      &--bold {
        margin-left: 100px;
        font-weight: bold;
        color: $color-base;
      }
      /*不变*/
      &--normal {
        margin-left: 10px;
      }
    }
    /**文本第二段 */
    &__text2 {
      width: 1200px;
      height: 20px;
      margin-top: 24px;
      font-size: $font-size-base;
      font-family: '微软雅黑';
      color: $color-base;
      display: flex;
      /**加粗 */
      &--bold {
        margin-left: 36px;
        font-weight: bold;
        color: $color-base;
      }
      /*不变*/
      &--normal {
        margin-left: 10px;
      }
    }
    /**文本第三段 */
    &__text3 {
      width: 1200px;
      height: 20px;
      margin-top: 24px;
      font-size: $font-size-base;
      font-family: '微软雅黑';
      color: $color-base;
      display: flex;
      /**加粗 */
      &--bold {
        margin-left: 68px;
        font-weight: bold;
        color: $color-base;
      }
      /*不变*/
      &--normal {
        margin-left: 10px;
      }
    }
    /**文本第四段 */
    &__text4 {
      width: 1200px;
      height: 20px;
      margin-top: 24px;
      font-size: $font-size-base;
      font-family: '微软雅黑';
      color: $color-base;
      display: flex;
      /**加粗 */
      &--bold {
        margin-left: 100px;
        font-weight: bold;
        color: $color-base;
      }
      /*不变*/
      &--normal {
        margin-left: 10px;
      }
    }
  }
}
</style>
