<template>
  <div class="icy-publish">
    <div>
      <Button class="icy-tab__button" @click="tabChange">招募通知</Button>
      <Button class="icy-tab__button active">入会公示</Button>
    </div>
    <ul class="icy-publish__content">
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
export default class Publish extends Vue {
  /** 跳转到招募通知列表页 */
  private tabChange(): void {
    this.$router.push('/memberService/notification/recruit/list')
  }
  /** 跳转到详情页 */
  private goToDetail(): void {
    this.$router.push('/memberService/notification/publish/detail')
  }
}
</script>

<style scoped lang="scss">
.icy-publish {
  padding-bottom: 0;
  &__content {
    padding-top: 30px;
    padding-bottom: 40px;
    min-height: 420px;
  }
}
</style>
