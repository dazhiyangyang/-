<template>
  <div class="icy-memberservice">
    <router-view />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class MemberService extends Vue {}
</script>

<style scoped lang="scss"></style>
