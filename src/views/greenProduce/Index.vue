<template>
  <div class="icy-greenProduce icy-content__containerwithnav icy--layout__slide">
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
export default class Index extends Vue {
  private tabPosition = 'industry'
  private tabList = navlist[this.$store.state.navIndex]
  mounted() {
    this.tabList = navlist[this.$store.state.navIndex]
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
.icy-greenProduce {
  &__content {
    width: 1120px;
    height: auto;
    margin-top: 50px;
    margin-left: 50px;
    margin-bottom: 16px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
