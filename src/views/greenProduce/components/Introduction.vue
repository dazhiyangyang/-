<template>
  <!-- -->
  <div class="icy-introductioncontent ">
    <ArticleDetail :type="2" />
  </div>
</template>

<script lang="ts">
/**
 *
 * @author cjq
 */
import { Component, Vue, Watch } from 'vue-property-decorator'
import informationCenterApi from '@/api/informationCenter'
import ArticleDetail from '@/components/article/ArticleDetail.vue'

@Component({
  components: {
    ArticleDetail
  }
})
export default class Introduction extends Vue {
  private listParams = {
    pageNo: 0,
    pageSize: 6,
    dictPid: '92',
    typeId: '93',
    serverNo: '54',
    pageType: '1'
  }

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
    this.getList()
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
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
/* 展示内容框 */
.icy-introductioncontent {
  &__top {
    display: flex;
    flex-wrap: wrap;
    .icy-informationitem {
      width: 352px;
      height: 352px;
      margin-right: 20px;
      /* 展示内容图片 */
      &__picture {
        width: 352px;
        height: 220px;
        border-radius: 5px;
      }
      /* 展示内容标题 */
      &__title {
        font-size: $font-size-base;
        height: 48px;
        color: $color-base;
        margin-top: 8px;
        text-align: justify;
        line-height: 28px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      /* 展示内容时间 */
      &__time {
        font-size: $font-size-base;
        margin-top: 24px;
        text-align: justify;
        color: $color-gray-999;
      }
    }
  }
  &__page {
    text-align: center;
  }
}
</style>
