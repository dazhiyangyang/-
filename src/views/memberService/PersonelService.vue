<template>
  <div class="icy-personelservice icy-content__container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PersonelService extends Vue {}
</script>

<style scoped lang="scss"></style>
