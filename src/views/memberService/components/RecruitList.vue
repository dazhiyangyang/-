<template>
  <div class="icy-notification">
    <div>
      <Button class="icy-tab__button active">招募通知</Button>
      <Button class="icy-tab__button" @click="tabChange">入会公示</Button>
    </div>
    <ul class="icy-notification__content">
      <!-- 文章列表单个item -->
      <li v-for="i in 5" :key="i" @click="goToDetail">
        <ArticleTimeItem />
      </li>
    </ul>
    <el-pagination
      class="icy-page"
      background
      layout="prev, pager, next"
      :total="1000"
      prev-text="上一页"
      next-text="下一页"
    />
  </div>
</template>

<script lang="ts">
/**
 * 入会通知
 * @author qinhuan
 */

import { Component, Vue } from 'vue-property-decorator'
import ArticleTimeItem from '@/components/article/ArticleTimeItem.vue'

@Component({
  components: {
    ArticleTimeItem
  }
})
export default class Recruit extends Vue {
  /** 跳转到入会公示列表页 */
  private tabChange(): void {
    this.$router.push('/memberService/notification/publish/list')
  }

  /** 跳转到详情页 */
  private goToDetail(): void {
    this.$router.push('/memberService/notification/recruit/detail')
  }
}
</script>

<style scoped lang="scss">
.icy-notification {
  padding-bottom: 0;
  &__content {
    padding-top: 30px;
    padding-bottom: 40px;
    min-height: 420px;
  }
}
</style>
