<template>
  <div class="icy-notification icy-content__container">
    <router-view />
  </div>
</template>

<script lang="ts">
/**
 * 入会通知
 * @author qinhuan
 */

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Notification extends Vue {}
</script>

<style scoped lang="scss">
.icy-notification {
  padding-bottom: 0;
  &__content {
    padding-top: 30px;
    padding-bottom: 40px;
    min-height: 420px;
  }
}
</style>
