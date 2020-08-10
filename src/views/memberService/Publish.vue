<template>
  <div class="icy-publish">
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
export default class Publish extends Vue {}
</script>

<style scoped lang="scss">
.icy-publish {
  padding-bottom: 0;
  &__content {
    padding-top: 30px;
    padding-bottom: 40px;
    min-height: 420px;
  }
}
</style>
