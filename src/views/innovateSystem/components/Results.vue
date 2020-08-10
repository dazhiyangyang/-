<template>
  <div class="icy-result">
    <ArticleSection title="研究成果" />
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
export default class Result extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.icy-result {
  width: 880px;
  height: auto;
}
</style>
