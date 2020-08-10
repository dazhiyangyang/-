<template>
  <div class="icy-home">
    <!-- 轮播图 -->
    <div class="icy-home__carousel">
      <Carousel />
    </div>
    <div class="icy-home__top">
      <div class="icy-home__top--left">
        <TechnologyTrends title="科技动态" />
      </div>
      <div class="icy-home__top--right">
        <Exhibition :type="1" :data="10" title="政策法规" />
      </div>
    </div>
    <div class="icy-home__center">
      <div class="icy-home__center--left">
        <Exhibition :type="1" :data="12" title="通知公告" />
      </div>
      <div class="icy-home__center--right">
        <Exhibition :type="1" :data="5" title="规划咨询" />
        <div class="icy-home__center--rightbottom">
          <Exhibition :type="1" :data="5" title="项目研究" />
        </div>
      </div>
    </div>
    <div class="icy-home__bottom">
      <Exhibition :type="2" :data="5" title="会议报名" />
    </div>
    <div class="icy-home__manufacture">
      <Greenmanufacturing :type="3" :data="6" title="绿色制造" />
    </div>
    <!-- </div> -->
    <div class="icy-home__friend">
      <FriendLinks />
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 首页
 * author:haoyu
 */
import { Component, Vue } from 'vue-property-decorator'
import Carousel from './components/Carousel.vue'
import Exhibition from './components/Exhibition.vue'
import Greenmanufacturing from './components/Greenmanufacturing.vue'
import TechnologyTrends from './components/TechnologyTrends.vue'
import FriendLinks from '../../components/base/FriendLinks.vue'

@Component({
  components: {
    Carousel,
    Exhibition,
    Greenmanufacturing,
    TechnologyTrends,
    FriendLinks
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.icy-home {
  background: $color-white;
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 44px;
  padding-top: 20px;
  &__carousel {
    margin: 0 auto;
    width: 1160px;
    height: 480px;
  }
  &__top {
    width: 1160px;
    padding-top: 38px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &--left {
      width: 550px;
    }
    &--right {
      width: 550px;
    }
  }
  &__center {
    width: 1160px;
    margin: 0 auto;
    padding-top: 38px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &--left {
      width: 550px;
    }
    &--right {
      width: 550px;
    }
    .icy-home__center--rightbottom {
      padding-top: 50px;
    }
  }
  &__bottom {
    width: 1160px;
    margin: 0 auto;
    padding-top: 38px;
  }
  &__manufacture {
    width: 1160px;
    margin: 0 auto;
    padding-top: 38px;
  }
  &__friend {
    width: 1160px;
    margin: 0 auto;
    padding-top: 38px;
  }
}
</style>
