<template>
  <div class="icy-joinapply icy-content__container">
    <div>
      <Button
        class="icy-tab__button"
        :class="{ active: tabPosition === 'form' }"
        label="industry"
        @click="changeTab('form', '/memberService/joinApply/form')"
        >填写申请表</Button
      >
      <Button
        class="icy-tab__button"
        :class="{ active: tabPosition === 'record' }"
        label="hot"
        @click="changeTab('record', '/memberService/joinApply/record')"
        >申请记录</Button
      >
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class JoinApply extends Vue {
  private tabPosition = 'form'

  /** 切换tab */
  private changeTab(position: string, path: string): void {
    this.tabPosition = position
    if (path !== location.pathname) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang="scss"></style>
