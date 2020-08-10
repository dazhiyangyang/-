<template>
  <div class="icy--layout__slide--left">
    <!-- 导航栏 -->
    <dl>
      <dt class="icy--leftnav__title">栏目导航</dt>
      <dd
        class="icy--leftnav__navlist"
        :class="{ active: navIndex === index }"
        v-for="(item, index) in navlist"
        :key="index"
        @click="tabClick(index, item.path)"
      >
        >>{{ item.name }}
      </dd>
    </dl>
  </div>
</template>

<script lang="ts">
/**
 *咨询中心-行业资讯
 * @author cjq
 */
import { Component, Vue, Watch } from 'vue-property-decorator'
import informationCenterApi from '@/api/informationCenter'

@Component
export default class ColumnNavigation extends Vue {
  /* 左侧导航栏名 */
  // private navlist:string[]=['联盟简介','最新动态','政策法规','通知公告', ]
  private navlist = [
    { name: '联盟简介', path: '/greenProduce/Introduction' },
    { name: '最新动态', path: '/greenProduce/Active' },
    { name: '政策法规', path: '/greenProduce/regulation' },
    { name: '通知公告', path: '/greenProduce/notice' }
  ]

  private listParams: any = {
    pageNo: 0,
    pageSize: 6,
    dictPid: '92',
    typeId: '93',
    serverNo: '54',
    pageType: '1'
  }
  private navIndex = 0

  /** 监听路由变化，请求不同数据 */
  @Watch('$route')
  private onRouteChange() {
    switch (this.$route.name) {
      case 'industry':
        this.listParams.typeId = '92'
        break
      case 'hot':
        this.listParams.typeId = '93'
        break
      case 'around':
        this.listParams.typeId = '94'
        break
      case 'other':
        this.listParams.typeId = '95'
        break
      default:
        break
    }
  }
  mounted() {
    this.$store.dispatch('setNavIndex', this.$route.meta.navIndex)
    this.getList()
  }
  /** 点击单个tab切换 */
  private tabClick(index: number, path: string) {
    this.$store.dispatch('setNavIndex', index)
    if (path !== location.pathname) {
      this.$router.push({ path })
    }
  }

  /** 请求资讯中心列表 */
  private async getList() {
    try {
      console.log(1111)
      const res = await informationCenterApi.getList(this.listParams)
      console.log(res)
    } catch (e) {
      // console.log(e.msg)
    }
  }

  // private tabClick(n: number) {
  //   console.log(n)
  //
  // }
}
</script>
<style scoped lang="scss">
@import '@/styles/variables';
/* 展示内容框 */
.icy--layout__slide--left {
  //左侧导航栏
  .icy--leftnav {
    &__title {
      width: 260px;
      height: 50px;
      background-color: $background-color-9bbce7;
      background: url('../../../assets/images/navbackground.png');
      text-align: left;
      margin-bottom: 10px;
      margin-top: 20px;
      font-size: $font-size-largest;
      padding: 12px;
      font-weight: bold;
      color: $color-white;
    }
    &__navlist {
      width: 260px;
      height: 48px;
      background-color: $background-color-f1f5f8;
      color: $color-dark-blue-2650a6;
      text-align: left;
      margin-bottom: 10px;
      font-size: $font-size-large;
      padding: 10px;

      cursor: pointer;
      &:hover {
        background-color: $background-color-d4e8fa;
      }
    }
  }
}
.icy--leftnav__navlist.active {
  background-color: $background-color-d4e8fa;
}
</style>
