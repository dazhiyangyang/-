<template>
  <div class="icy-connectus icy-content__container">
    <!-- 顶部图片 -->
    <img class="icy-connectus__banner" src="@/assets/images/connectus_banner.png" />
    <div class="icy-connectus__center">
      <ul class="icy-connectus__center--firstExternal">
        <li class="icy-connectus__center--title">
          中国机械工业联合会科技工作
          <br />
          <span class="icy-connectus__center--secondTitle">(重大装备项目办公室)</span>
        </li>
        <li class="icy-connectus__center--content">
          <span class="icy-connectus__center--blod">地址:</span>北京市西城区三里河路46号
        </li>
        <li class="icy-connectus__center--content"><span class="icy-connectus__center--blod">邮编:</span>100823</li>
        <li class="icy-connectus__center--content">
          <span class="icy-connectus__center--blod">电话:</span>010-68594886/5466/4919
        </li>
        <li class="icy-connectus__center--content">
          <span class="icy-connectus__center--blod">传真:</span>010-68533225
        </li>
        <li class="icy-connectus__center--content">
          <span class="icy-connectus__center--blod">邮箱:</span>cmif-kj@mei.net.cn
        </li>
      </ul>
      <ul class="icy-connectus__center--secondExternal">
        <li class="icy-connectus__center--title">中国机械工业科学技术奖奖励办公室</li>
        <li class="icy-connectus__center--content">
          <span class="icy-connectus__center--blod">地址:</span>北京市西城区三里河路46号
        </li>
        <li class="icy-connectus__center--content"><span class="icy-connectus__center--blod">邮编:</span>100823</li>
        <li class="icy-connectus__center--content">
          <span class="icy-connectus__center--blod">电话:</span>010-68594886/5466/4919
        </li>
        <li class="icy-connectus__center--content">
          <span class="icy-connectus__center--blod">传真:</span>010-68533225
        </li>
        <li class="icy-connectus__center--content">
          <span class="icy-connectus__center--blod">邮箱:</span>cmif-kj@mei.net.cn
        </li>
      </ul>
      <ul class="icy-connectus__center--external">
        <li class="icy-connectus__center--title">绿色制造产业技术创新战略联盟秘书处</li>
        <li class="icy-connectus__center--content">
          <span class="icy-connectus__center--blod">地址:</span>北京市西城区三里河路46号
        </li>
        <li class="icy-connectus__center--content"><span class="icy-connectus__center--blod">邮编:</span>100823</li>
        <li class="icy-connectus__center--content">
          <span class="icy-connectus__center--blod">电话:</span>010-68594886/5466/4919
        </li>
        <li class="icy-connectus__center--content">
          <span class="icy-connectus__center--blod">传真:</span>010-68533225
        </li>
        <li class="icy-connectus__center--content">
          <span class="icy-connectus__center--blod">邮箱:</span>cmif-kj@mei.net.cn
        </li>
      </ul>
    </div>
    <!-- 地图 -->
    <img class="icy-connectus__map" src="@/assets/images/map.png" />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Index extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
.icy-connectus {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding-bottom: 80px;
  &__banner {
    width: 1160px;
    height: 320px;
    margin-top: 30px;
  }
  &__center {
    display: flex;
    width: 1160px;
    margin: 0 auto;
    &--external {
      display: flex;
      flex-wrap: wrap;
      margin-top: 51px;
      width: 387px;
    }
    &--firstExternal {
      display: flex;
      flex-wrap: wrap;
      margin-top: 51px;
      width: 360px;
    }
    &--secondExternal {
      display: flex;
      flex-wrap: wrap;
      margin-top: 51px;
      width: 413px;
    }

    &--title {
      width: 387px;
      text-align: left;
      font-size: $font-size-largest-22;
      color: $color-base;
      height: 74px;
    }
    &--secondTitle {
      display: inline-block;
      font-size: $font-size-large;
      color: $color-base;
      margin-top: 20px;
    }
    &--content {
      width: 387px;
      text-align: left;
      font-size: $font-size-small;
      color: $color-base;
      margin-top: 20px;
    }
    &--blod {
      font-weight: bold;
      margin-right: 10px;
    }
  }

  &__map {
    display: flex;
    margin-left: 20px;
    margin-top: 48px;
  }
}
</style>
