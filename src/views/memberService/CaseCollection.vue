<template>
  <div class="icy-casecollection icy-content__container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CaseCollection extends Vue {}
</script>

<style scoped lang="scss"></style>
