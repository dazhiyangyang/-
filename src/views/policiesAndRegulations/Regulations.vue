<template>
  <div class="icy-regulations">
    <div>
      <Button class="icy-tab__button" @click="changeTab">政策</Button>
      <Button class="icy-tab__button active">法规</Button>
    </div>
    <ul class="icy-regulations__content">
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
 * 政策法规-法规-列表展示页面
 * @author qinhuan
 */

import { Component, Vue } from 'vue-property-decorator'
import ArticleTimeItem from '@/components/article/ArticleTimeItem.vue'

@Component({
  components: {
    ArticleTimeItem
  }
})
export default class Regulations extends Vue {
  /** 跳转到政策列表页 */
  private changeTab(): void {
    this.$router.push({ path: '/policiesAndRegulations/policies' })
  }

  /** 跳转到详情页 */
  private goToDetail(): void {
    this.$router.push('/policiesAndRegulations/detail')
  }
}
</script>

<style scoped lang="scss">
.icy-regulations {
  padding-bottom: 0;
  &__content {
    padding-top: 30px;
    padding-bottom: 40px;
    min-height: 420px;
  }
}
</style>
