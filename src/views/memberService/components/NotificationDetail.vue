<template>
  <div class="icy-regulationdetail">
    <!-- 文章详情 -->
    <Article-detail :type="2" />
  </div>
</template>

<script>
/**
 * 入会通知详情页
 * @author qinhuan
 */
import { Component, Vue } from 'vue-property-decorator'
import ArticleDetail from '@/components/article/ArticleDetail.vue'

// 单个item
@Component({
  components: {
    ArticleDetail
  }
})
export default class NotificationDetail extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
</style>
