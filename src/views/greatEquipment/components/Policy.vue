<template>
  <div class="icy-policy">
    <ArticleSection title="政策解读" />
  </div>
</template>

<script lang="ts">
/**
 * 政策解读
 * author:haoyu
 */
import { Component, Vue } from 'vue-property-decorator'
import ArticleSection from '@/components/article/ArticleSection.vue'
@Component({
  components: {
    ArticleSection
  }
})
export default class Policy extends Vue {}
</script>
