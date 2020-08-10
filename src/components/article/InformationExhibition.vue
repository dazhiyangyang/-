<template>
  <div class="icy-informationexhibition">
    <dl v-if="type == 1" class="icy-informationexhibition__external">
      <dt class="icy-informationexhibition__external--point"></dt>
      <dd class="icy-informationexhibition__external--title">中国机械工业联合会首次召开科技成果视频鉴定会</dd>
      <dd class="icy-informationexhibition__external--time">2019-04-29</dd>
    </dl>
    <dl v-if="type == 2" class="icy-informationexhibition__external">
      <dt class="icy-informationexhibition__external--symbol"></dt>
      <dt class="icy-informationexhibition__external--year">[2019年会议]</dt>
      <dt class="icy-informationexhibition__external--caption">
        2019年全国机械行业两化融合推荐大会暨工业互联网促进机械工业转型发展论坛
      </dt>
      <dd class="icy-informationexhibition__external--apply">
        <span class="icy-informationexhibition__external--button">立即报名</span>
      </dd>
    </dl>
    <dl v-if="type == 3" class="icy-informationexhibition__external">
      <dt class="icy-informationexhibition__external--symbol"></dt>
      <dt class="icy-informationexhibition__external--heading">
        2019年全国机械行业两化融合推荐大会暨工业互联网促进机械工业转型发展论坛
      </dt>
    </dl>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class InformationExhibition extends Vue {
  @Prop() private information!: number
  @Prop() private type!: string
}
</script>

<style scoped lang="scss">
@import '../../styles/variables';
.icy-informationexhibition {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  .icy-informationexhibition__external:hover dd {
    color: $color-red;
  }
  &__external {
    display: flex;
    width: 100%;
    height: 45px;
    line-height: 45px;
    cursor: pointer;
    &--point {
      width: 3px;
      height: 3px;
      background: $background-color-07519a;
      margin-left: 10px;
      margin-right: 10px;
      position: relative;
      top: 19px;
    }
    &--symbol {
      width: 2px;
      height: 2px;
      margin-left: 10px;
      margin-right: 10px;
      position: relative;
      top: 19px;
    }
    &--symbol::after {
      content: ' ';
      display: inline-block;
      height: 5px;
      width: 5px;
      border-width: 1px 1px 0 0;
      border-color: $color-c30402;
      border-style: solid;
      -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: absolute;
    }
    &--title {
      width: 71%;
      text-align: left;
      font-size: $font-size-base;
      color: $color-base;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      overflow: hidden;
    }
    &--year {
      width: 100px;
      color: $background-color-07519a;
      font-size: $font-size-base;
    }
    &--caption {
      width: 72%;
      text-align: left;
      font-size: $font-size-base;
      color: $color-base;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      overflow: hidden;
    }
    &--caption:hover {
      color: $color-red;
    }
    &--heading {
      width: 500px;
      text-align: left;
      font-size: $font-size-base;
      color: $color-base;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      overflow: hidden;
    }
    &--heading:hover {
      color: $color-red;
    }
    &--time {
      width: 28%;
      text-align: right;
      font-size: $font-size-base;
      color: $color-base;
    }
    &--apply {
      display: flex;
      width: 23%;
      justify-content: flex-end;
      padding-right: 20px;
      align-items: center;
    }
    &--button {
      display: inline-block;
      width: 86px;
      height: 36px;
      border: 1px solid $color-b8d9f9;
      background-color: $color-e8f3fd;
      text-align: center;
      line-height: 36px;
      color: $background-color-07519a;
      font-size: $color-base;
      cursor: pointer;
    }
  }
}
</style>
