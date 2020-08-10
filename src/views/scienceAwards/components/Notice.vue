<template>
  <!-- 咨询中心内容 -->
  <div class="icy-informationcontent">
    <ArticleSection title="政策解读" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ArticleSection from '@/components/article/ArticleSection.vue'
@Component({
  components: {
    ArticleSection
  }
})
export default class Notice extends Vue {}
</script>

<style></style>
