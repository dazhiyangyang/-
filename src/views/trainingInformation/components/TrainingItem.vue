<template>
  <div class="icy-trainingitem">
    <!-- 播放 -->
    <div class="icy-trainingitem__video">
      <video class="icy-trainingitem__video"></video>
      <div class="icy-trainingitem__video--button">
        <img src="@/assets/images/videobutton.png" />
      </div>
    </div>
    <div class="icy-trainingitem__content">
      <!--      内容标题-->
      <p class="icy-trainingitem__content--title">
        读智联世界，探无限可能，十四哦啊的哈佛 —————— 阿克苏接电话飞洒发的那份
      </p>
      <!--      内容简介-->
      <p class="icy-trainingitem__content--introduction">
        撒赖打开房间老师看了撒旦撒旦反抗拉萨就看撒旦解放拉萨解放啦静安寺大幅拉升阶段覅
      </p>
      <div style="display: flex">
        <img src="@/assets/images/lecturer.png" alt class="icy-trainingitem__content--jpg" />
        <!--      内容作者-->
        <p class="icy-trainingitem__content--lecturer">讲师：讲师哈哈</p>
      </div>
    </div>
    <!--      时长显示-->
    <div class="icy-trainingitem__contenttime">
      <div class="icy-trainingitem__contenttime--line"></div>
      时长：20分钟
    </div>
  </div>
</template>

<script lang="ts">
/**
 *
 *pei详情页
 * @author 陈家庆
 */
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class TrainingItem extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

// 培训信息视频tab 单个item
.icy-trainingitem {
  width: 1140px;
  height: 140px;
  margin-left: 30px;
  box-shadow: 0px 0px 10px 5px #f2f2f2f2;
  border: 1px solid rgba(180, 192, 216, 0.267);
  outline: none;
  display: flex;
  margin-bottom: 30px;
  cursor: pointer;
  //视频图片box
  &__video {
    position: relative;
    width: 260px;
    height: 140px;
    float: left;
    text-align: center;
    outline: none;
    //播放按钮
    &--button {
      display: flex;
      position: absolute;
      margin-top: 15%;
      margin-left: 10%;
      margin-left: 40%;
      text-align: center;
      outline: none;
    }
  }
  //文章内容box
  .icy-trainingitem__content {
    width: 648px;
    height: 140px;
    font-size: 18px;
    text-align: left;
    //内容标题
    &--title {
      cursor: pointer;
      font-size: 18px;
      color: $color-base;
      margin-left: 30px;
      margin-top: 20px;
      text-align: left;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      overflow: hidden;
      padding-right: 30px;
    }
    //内容简介
    &--introduction {
      font-size: 16px;
      color: $font-color-666666;
      margin-left: 30px;
      padding-top: 14px;
      padding-bottom: 14px;
      text-align: left;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      overflow: hidden;
      padding-right: 20px;
    }
    //讲师头像
    &--jpg {
      margin-left: 30px;
      margin-top: 0px;
    }
    //讲师
    &--lecturer {
      font-size: 14px;
      margin-left: 10px;
      margin-top: 5px;
      color: $color-gray-999;
    }
  }
  //视频时长box
  .icy-trainingitem__contenttime {
    position: relative;
    width: 232px;
    height: 140px;
    font-size: 18px;
    color: $color-dark-blue-2650a6;
    text-align: center;
    line-height: 7;
    //竖线
    &--line {
      position: absolute;
      top: 30px;
      left: 0px;
      width: 1px;
      height: 80px;
      background-color: $color-gray-e0e0e0;
    }
  }
}
</style>
