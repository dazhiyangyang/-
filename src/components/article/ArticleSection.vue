<template>
  <div class="icy-articlesection">
    <!-- 页面主版块标题 -->
    <PlateHead :title="title" />
    <!-- 文章列表 -->
    <div class="icy-articlesection__content">
      <ExhibitionETS :data="5" />
      <ExhibitionETS :data="5" />
      <ExhibitionETS :data="5" />
    </div>
    <!-- 分页 -->
    <el-pagination
      class="icy-page"
      background
      layout="prev, pager, next"
      :total="500"
      prev-text="上一页"
      next-text="下一页"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import PlateHead from '@/components/article/PlateHead.vue'
import ExhibitionETS from '@/components/article/ExhibitioneEST.vue'
@Component({
  components: {
    PlateHead,
    ExhibitionETS
  }
})
export default class ArticleSection extends Vue {
  @Prop() private title!: string
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
.icy-articlesection {
  padding: 30px 34px;
  &__content {
    padding-bottom: 40px;
  }
}
</style>
