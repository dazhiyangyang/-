<template>
  <div class="icy-nav">
    <ul class="icy-nav__tab">
      <li
        class="icy-nav__tab--item"
        :class="{ active: this.$store.state.navIndex === 0 }"
        @click="tabClick(0, '/home')"
      >
        首页
      </li>
      <li
        class="icy-nav__tab--item"
        :class="{ active: this.$store.state.navIndex === 1 }"
        @click="tabClick(1, '/departIntroduction')"
      >
        部门简介
      </li>
      <li
        class="icy-nav__tab--item"
        :class="{ active: this.$store.state.navIndex === 2 }"
        @click="tabClick(2, '/technologyNews')"
      >
        科技动态
      </li>
      <li
        class="icy-nav__tab--item"
        :class="{ active: this.$store.state.navIndex === 3 }"
        @click="tabClick(3, '/scienceAwards')"
      >
        奖励工作
      </li>
      <li
        class="icy-nav__tab--item"
        :class="{ active: this.$store.state.navIndex === 4 }"
        @click="tabClick(4, '/innovateSystem')"
      >
        创新体系
      </li>
      <li
        class="icy-nav__tab--item"
        :class="{ active: this.$store.state.navIndex === 5 }"
        @click="tabClick(5, '/greatEquipment')"
      >
        重大装备
      </li>
      <li
        class="icy-nav__tab--item"
        :class="{ active: this.$store.state.navIndex === 6 }"
        @click="tabClick(6, '/technologyAuthenticate')"
      >
        技术鉴定
      </li>
      <li
        class="icy-nav__tab--item"
        :class="{ active: this.$store.state.navIndex === 7 }"
        @click="tabClick(7, '/achievenmentChange')"
      >
        成果转化
      </li>
      <li
        class="icy-nav__tab--item"
        :class="{ active: this.$store.state.navIndex === 8 }"
        @click="tabClick(8, '/talentEvaluate')"
      >
        人才评价
      </li>
      <li
        class="icy-nav__tab--item"
        :class="{ active: this.$store.state.navIndex === 9 }"
        @click="tabClick(9, '/greenProduce')"
      >
        制造分会
      </li>
      <li
        class="icy-nav__tab--item"
        :class="{ active: this.$store.state.navIndex === 10 }"
        @click="tabClick(10, '/connectUs')"
      >
        创新联盟
      </li>
      <li
        class="icy-nav__tab--item"
        :class="{ active: this.$store.state.navIndex === 11 }"
        @click="tabClick(11, '/connectUs')"
      >
        联系我们
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Nav extends Vue {
  mounted() {
    this.$store.dispatch('setNavIndex', this.$route.meta.navIndex)
  }
  /** 点击单个tab切换 */
  private tabClick(index: number, path: string) {
    this.$store.dispatch('setNavIndex', index)
    if (path !== location.pathname) {
      this.$router.push({ path })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/variables';

.icy-nav {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 50px;
  margin: 0 auto;
  margin-top: 30px;
  color: $color-white;
  background-color: $background-color-0c5ba9;
  &__tab {
    width: 1300px;
    display: flex;
    margin: 0 auto;
    &--item {
      width: 90px;
      line-height: 3;
      cursor: pointer;
      .el-dropdown-link {
        font-size: $font-size-base;
        color: $font-color-2c3e50;
      }
    }
  }
  .active {
    // color: $color-dark-blue-2650a6;
    width: 90px;
    background-color: $background-color-034d97;
    border-bottom: 2px solid $color-dark-blue-2650a6;
  }
  &__login {
    width: 70px;
    height: 32px;
    border: 1px solid $color-gray-e0e0e0;
    font-size: $font-size-base;
    cursor: pointer;
  }
}
</style>
