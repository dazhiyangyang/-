<template>
  <!-- 咨询中心内容 -->
  <div class="icy-informationcontent">
    <div class="icy-informationcontent__top">
      <dl class="icy-informationitem" v-for="i in 8" :key="i">
        <dt>
          <!-- 内容图片 -->
          <img src="@/assets/images/informationitem1.png" alt="picture" class="icy-informationitem__picture" />
        </dt>
        <dd>
          <!-- 内容标题 -->
          <p class="icy-informationitem__title">
            保变电器圆满完成昆柳龙直流工程全部柔性直流变123保变电器圆满完成昆柳龙直流工程全部柔性直流变123
          </p>
          <!-- 内容时间 -->
          <p class="icy-informationitem__time">2019-11-27</p>
        </dd>
      </dl>
    </div>
    <!-- 分页 -->
    <div class="icy-informationcontent__page">
      <el-pagination
        class="icy-page"
        background
        layout="prev, pager, next"
        :total="1000"
        prev-text="上一页"
        next-text="下一页"
      />
    </div>
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
export default class Notice extends Vue {
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
.icy-informationcontent {
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
