<template>
  <div class="icy-simple">
    <video src controls="controls" class="icy-simple__leftvideo"></video>
    <div class="icy-simple__righttext">
      <a herf="#" class="icy-simple__righttext--title"
        >"读的非官方大哥大范甘迪《智联世界》，探无线可能" —— 机械制造专题讲解</a
      >
      <div class="icy-simple__righttext--content">
        主要内容: 主要解释关于机械制造的分类规则以及目前主要的几个分类体系
      </div>
      <div class="icy-simple__righttext--lecturerinformation">
        <span class="icy-simple__righttext--avatar" img src alt></span>
        <span class="icy-simple__righttext--lecturername">讲师:周振伟</span>
      </div>
      <div class="icy-simple__righttext--coursetime">课程总时长:20分钟</div>
    </div>
  </div>
</template>

<script>
/**
 * 培训详情顶部简介
 * @author yangyang
 */
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class IntroDetail extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.icy-simple {
  width: 1200px;
  height: 420px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  &__leftvideo {
    width: 600px;
    height: 340px;
    margin: 30px 32px 50px 30px;
  }
  &__righttext {
    width: 538px;
    height: 340px;
    margin-top: 40px;
    text-align-last: left;
    &--title {
      font-size: $font-size-large;
      font-weight: bold;
      color: $color-base;
      padding-top: 0px;
    }
    &--content {
      color: $color-gray-666;
      font-size: $font-size-small;
      font-weight: bold;
      margin-top: 30px;
    }
    &--lecturerinformation {
      margin-top: 6px;
      line-height: 46px;
      .icy-simple__righttext--avatar {
        width: 36px;
        height: 36px;
        background: $color-yellow; //演示头像
        border-radius: 50%;
        float: left;
        margin-right: 10px;
      }
      .icy-simple__righttext--lecturername {
        color: $color-gray-666;
        font-size: $font-size-small;
      }
    }
    &--coursetime {
      width: 500px;
      height: 40px;
      color: $color-gray-666;
      font-size: $font-size-small;
      background: $color-white3;
      text-align: center;
      line-height: 40px;
      padding-left: 10px;
    }
  }
}
</style>
