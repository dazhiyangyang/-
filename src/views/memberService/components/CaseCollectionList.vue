<template>
  <div class="icy-casecollectionlist">
    <TabTitle title="案例征集" />
    <ul class="icy-casecollectionlist__content">
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
import { Component, Vue } from 'vue-property-decorator'
import ArticleTimeItem from '@/components/article/ArticleTimeItem.vue'
import TabTitle from './../components/TabTitle.vue'

@Component({
  components: {
    ArticleTimeItem,
    TabTitle
  }
})
export default class CaseCollectionList extends Vue {
  /** 跳转到详情页 */
  private goToDetail(): void {
    this.$router.push('/memberService/caseCollection/detail')
  }
}
</script>

<style scoped lang="scss">
.icy-casecollectionlist {
  padding-bottom: 0;
  &__content {
    padding-top: 30px;
    padding-bottom: 40px;
    min-height: 420px;
  }
}
</style>
