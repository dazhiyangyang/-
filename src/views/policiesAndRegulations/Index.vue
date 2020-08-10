<template>
  <div class="icy-regulations icy-content__container">
    <router-view />
  </div>
</template>

<script lang="ts">
/**
 * 政策法规-首页
 * @author qinhuan
 */

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PoliciesAndRegulations extends Vue {}
</script>

<style scoped lang="scss">
.icy-regulations {
  padding-bottom: 0;
  &__content {
    padding-top: 30px;
    padding-bottom: 40px;
    min-height: 420px;
  }
}
</style>
