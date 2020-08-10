<template>
  <div class="icy-informationcenter icy-content__container icy--layout__slide">
    <!-- tab -->
    <LeftNav :navlist1="tabList" :type="1" />
    <!-- 内容 -->
    <div class="icy--layout__slide--right">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LeftNav from '@/components/base/LeftNav.vue'
import { navlist } from '@/utils/constant'
@Component({
  components: {
    LeftNav
  }
})
export default class InformationCenter extends Vue {
  private tabPosition = 'industry'
  // 获取constant中navlist中的数据

  private tabList = navlist[this.$store.state.navIndex]
  mounted() {
    this.tabList = navlist[this.$store.state.navIndex]
    console.log(this.tabList)
    console.log(navlist[this.$store.state.navIndex])
  }
  /** 切换tab */
  private changeTab(position: string, path: string): void {
    this.tabPosition = position
    if (path !== location.pathname) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
</style>
