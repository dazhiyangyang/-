<template>
  <div class="icy-footer">
    <ul class="icy-footer__ul">
      <!-- 内容 -->
      <li class="icy-footer__ul--info">建议使用IE7.0以上的浏览器,1024x768以上分辨率</li>
      <li class="icy-footer__ul--info">版权所有: 中国机械工业联合会科技工作部</li>
      <li class="icy-footer__ul--info">地址: 北京市西城区三里河路46号 邮编: 100823</li>
      <li class="icy-footer__ul--info">电话: 010-68594886/5466/4919 传真: 010-68533225 邮箱: cmif-kj@mei.net.cn</li>
      <li class="icy-footer__ul--info">
        本网站由
        <span class="icy-footer__bottom">中国机经网</span>制作维护
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
.icy-footer {
  background-color: #2c6aa8;
  width: 100%;
  height: 260px;
  padding-top: 40px;
  margin-top: 40px;
  &__ul {
    display: flex;
    width: 100%;
    height: 180px;
    flex-wrap: wrap;
    align-items: center;
    &--info {
      width: 100%;
      height: 20px;
      font-size: $font-size-base;
      color: #cfe0f0;
    }
  }
  &__bottom {
    color: $color-red2;
  }
}
</style>
