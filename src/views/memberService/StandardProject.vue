<template>
  <div class="icy-standardproject icy-content__container">
    <router-view />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class StandardProject extends Vue {}
</script>

<style scoped lang="scss"></style>
