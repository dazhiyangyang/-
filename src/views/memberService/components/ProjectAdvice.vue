<template>
  <div class="icy-advice">
    <div>
      <span class="icy-advice__title">团体标准项目建议书</span>
      <div class="icy-advice__external">
        <!-- 提交申请 图案-->
        <p class="icy-advice__one">
          <span class="icy-advice__one--app">1</span>
        </p>
        <!-- 审批发布 图案-->
        <p class="icy-advice__two">
          <span class="icy-advice__two--rele">2</span>
        </p>
      </div>
      <div class="icy-advice__column">
        <!-- 提交申请 -->
        <p class="icy-advice__column--app">1.提交申请</p>
        <!-- 审批发布 -->
        <p class="icy-advice__column--rele">2.审批发布</p>
      </div>
    </div>
    <!-- 申请的表格 -->
    <!-- 注意事项 -->
    <div class="icy-advice__precautions">
      <!-- 四个角 -->
      <div class="icy-advice__precautions--angle">
        <p class="icy-advice__precautions--note">
          [注1]&nbsp;&nbsp;填写制定或修订项目中，若选择修订则必须填写被修订标准编号;
        </p>
        <p class="icy-advice__precautions--note">
          [注2]&nbsp;&nbsp;填写是否有对应国家标准或行业标准，若选择有则必须填写对应国家标准或行业标准编号;
        </p>
        <p class="icy-advice__precautions--note">
          [注3]&nbsp;&nbsp;选择采用国际标准或国外先进标注，必须填写采标标号及采用程度;
        </p>
        <p class="icy-advice__precautions--note">
          [注4]&nbsp;&nbsp;选择采快捷程序，必须填写快速程序代码。B代表省略起草阶段，C代表省略起草阶段和征求意见阶段，具体要求详见《采用快速程序制定国
        </p>
        <p class="icy-advice__precautions--note">家标准的管理规定》。</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Advice extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
.icy-advice {
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
  &__precautions {
    width: 1100px;
    height: 200px;
    margin-top: 20px;
    margin-left: 50px;
    border: 1px solid $background-color-e1effa;
    background-color: $color-gray-fafafa;
    &--angle {
      display: flex;
      flex-wrap: wrap;
      margin-left: 10px;
      margin-top: 10px;
      width: 1080px;
      height: 180px;
      background: linear-gradient(to left, $background-color-e1effa, $background-color-e1effa) left top no-repeat,
        linear-gradient(to bottom, $background-color-e1effa, $background-color-e1effa) left top no-repeat,
        linear-gradient(to left, $background-color-e1effa, $background-color-e1effa) right top no-repeat,
        linear-gradient(to bottom, $background-color-e1effa, $background-color-e1effa) right top no-repeat,
        linear-gradient(to left, $background-color-e1effa, $background-color-e1effa) left bottom no-repeat,
        linear-gradient(to bottom, $background-color-e1effa, $background-color-e1effa) left bottom no-repeat,
        linear-gradient(to left, $background-color-e1effa, $background-color-e1effa) right bottom no-repeat,
        linear-gradient(to left, $background-color-e1effa, $background-color-e1effa) right bottom no-repeat;
      background-size: 1px 10px, 10px 1px, 1px 10px, 10px 1px;
    }
    &--note {
      margin-left: 20px;
      margin-top: 8px;
      font-size: $font-size-base;
      color: $color-base;
    }
  }
}
</style>
