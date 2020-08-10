<template>
  <div class="icy-informationcenter icy-content__container icy--layout__slide">
    <!-- tab -->
    <ColumnNavigation />
    <!-- 内容 -->
    <div class="icy--layout__slide--right">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ColumnNavigation from './components/ColumnNavigation.vue'

@Component({
  components: {
    ColumnNavigation
  }
})
export default class InformationCenter extends Vue {
  private tabPosition = 'industry'

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
.icy-informationcenter {
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
