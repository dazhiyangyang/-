<template>
  <div class="icy-patentservice icy-content__container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class PatentService extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
.icy-patentservice {
  padding-top: 30px;
  padding-bottom: 60px;
}
</style>
