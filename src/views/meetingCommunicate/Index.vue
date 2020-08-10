<template>
  <div class="icy-meetingcommunicate icy-content__container">
    <img class="icy-meetingcommunicate__serializedimg" src="@/assets/images/communicate1.png" />
    <div class="icy-meetingcommunicate__search">
      <div class="icy-meetingcommunicate__search--text">快速查询WQEQW：</div>
      <input class="icy-meetingcommunicate__search--input" placeholder="请输入关键词" />
      <select class="icy-meetingcommunicate__search--select">
        <option>全部会议</option>
        <option>商业会议</option>
      </select>
      <button class="icy-meetingcommunicate__search--button">查询</button>
    </div>
    <div class="icy-newsdistrict">
      <div class="icy-newsframe" v-for="i in 5" :key="i">
        <img class="icy-newsframe__leftimg" src="@/assets/images/communicate2.png" />
        <div class="icy-newsframe__middletext">
          <p class="icy-newsframe__middletext--title">全国机械工业经济形势报告会</p>
          <p class="icy-newsframe__middletext--hot">热门</p>
          <p class="icy-newsframe__middletext--recommend">推荐</p>
          <p class="icy-newsframe__middletext--matter">
            议围绕《纲要》的几个方面内容展开了充分研讨。特别顾问蔡惟慈指出，
            在全球疫情蔓延的情况下，机械工业“十四五”所面临的发展环境。
          </p>
        </div>
        <div class="icy-newsframe__right">
          <div class="icy-address">
            <img class="icy-address__img" src="@/assets/images/address.png" />
            <p class="icy-address__name">中国·河北·唐山</p>
          </div>
          <div class="icy-time">
            <img class="icy-time__img" src="@/assets/images/time.png" />
            <p class="icy-time__name">2019年11月8日-9日 10: 00-18:00</p>
          </div>
        </div>
      </div>
    </div>
    <div class="icy-meetingcommunicate__page">
      <el-pagination
        class="icy-page"
        background
        layout="prev, pager, next"
        prev-text="上一页"
        next-text="下一页"
        :total="1000"
      />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class MeetingCommunicate extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.icy-meetingcommunicate {
  width: 1200px;
  height: auto;
  margin: 0px auto;
  /**轮播图 */
  &__serializedimg {
    padding: 30px;
  }
  /**搜索区域 */
  &__search {
    width: 1200px;
    height: auto;
    display: flex;
    /**文本 */
    &--text {
      margin-top: 13px;
      margin-left: 30px;
      font-size: $font-size-base;
      color: $color-base;
    }
    /***输入框 */
    &--input {
      cursor: pointer;
      padding: 10px;
      height: 46px;
      width: 400px;
      border-radius: 5px;
      border: 1px solid $border-color-d1d1d1;
      outline: none;
      font-size: $font-size-base;
      color: $color-gray-666;
    }
    /**选择框 */
    &--select {
      cursor: pointer;
      appearance: none; /* 去掉默认图标 */
      -moz-appearance: none; /* Firefox */
      -webkit-appearance: none; /* Safari and Chrome */
      padding: 0 20px 0 10px;
      background: url('../../assets/images/deltoid.png') no-repeat scroll 140px center transparent;
      outline: none;
      /* 以下是圆角和边框等其他设置： */
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      margin-left: 10px;
      width: 160px;
      height: 46px;
      font-family: '微软雅黑';
      border: 1px solid $border-color-d1d1d1;
      line-height: 46px;
      font-size: $font-size-base;
      color: $color-gray-666;
    }
    /**按钮 */
    &--button {
      cursor: pointer;
      margin-left: 10px;
      height: 46px;
      width: 70px;
      border: none;
      outline: none;
      border-radius: 5px;
      background-color: $background-color-5b9bd5;
      color: $color-white;
      width: 60px;
    }
  }

  /**新闻区域 */
  .icy-newsdistrict {
    width: 1140px;
    margin: 0 auto;
    padding: 1px 0px 0px 0px;
  }
  .icy-newsframe {
    margin-top: 20px;
    width: 1140px;
    height: 152px;
    cursor: pointer;
    border: 1px solid $border-color-d1d1d1;
    display: flex;
    &__leftimg {
      margin-top: -1px;
      width: 260px;
      height: 152px;
    }
    &__middletext {
      margin-left: 20px;
      width: 590px;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      &--title {
        margin-top: 30px;
        font-size: $font-size-large;
        font-family: '微软雅黑';
        color: $color-base;
      }
      /**热门 */
      &--hot {
        margin-left: 10px;
        margin-top: 33px;
        border-radius: 24px;
        width: 42px;
        height: $font-size-large;
        background-color: $color-orange1;
        text-align: center;
        font-size: $font-size-mini1;
        color: $color-white;
      }
      /**推荐 */
      &--recommend {
        margin-left: 12px;
        margin-top: 33px;
        border-radius: 24px;
        width: 42px;
        height: $font-size-large;
        background-color: $font-color-3db4ba;
        text-align: center;
        font-size: $font-size-mini1;
        color: $color-white;
      }
      /**内容 */
      &--matter {
        margin-top: -6px;
        width: 533px;
        font-size: $font-size-base;
        color: $color-gray-999;
        text-align: left;
        line-height: 27px;
      }
    }
    &__right {
      width: 250px;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }
  /**地址 */
  .icy-address {
    width: 100%;
    height: 14px;
    margin-top: 55px;
    display: flex;
    &__img {
      height: 14px;
      margin-top: 4px;
    }
    &__name {
      margin-left: 10px;
      font-size: $font-size-small;
      color: $color-dark-blue-2650a6;
    }
  }
  /**时间 */
  .icy-time {
    height: $font-size-base;
    margin-top: -23px;
    display: flex;
    &__img {
      height: 10px;
      margin-top: 5px;
    }
    &__name {
      margin-left: 10px;
      font-size: $font-size-small;
      color: $color-dark-blue-2650a6;
    }
  }
  &__page {
    width: 1168px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 40px;
    padding-top: 40px;
  }
}
</style>
