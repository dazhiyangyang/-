<template>
  <div class="icy-show">
    <ArticleSection title="首台展示" />
  </div>
</template>

<script lang="ts">
/**
 * 首台展示
 * author:haoyu
 */
import { Component, Vue } from 'vue-property-decorator'
import ArticleSection from '@/components/article/ArticleSection.vue'

@Component({
  components: {
    ArticleSection
  }
})
export default class Show extends Vue {}
</script>


