<template>
  <div class="icy-project">
    <ArticleSection title="重大装备项目管理" />
  </div>
</template>

<script lang="ts">
/**
 * 重大装备项目管理
 * author:haoyu
 */
import { Component, Vue } from 'vue-property-decorator'
import ArticleSection from '@/components/article/ArticleSection.vue'

@Component({
  components: {
    ArticleSection
  }
})
export default class Project extends Vue {}
</script>

