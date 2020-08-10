<template>
  <div class="icy-trainingInformation icy-content__container">
    <router-view />
  </div>
</template>

<script lang="ts">
/**
 * 培训-首页
 * @author cjq
 */
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TrainingInformation extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/element-ui';

.icy-trainingInformation {
  width: 1200px;
  &__content {
    margin-top: 50px;
    margin-bottom: 50px;
  }
}
</style>
