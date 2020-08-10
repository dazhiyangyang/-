<template>
  <div class="icy-dynamic">
    <ArticleSection title="最新动态" />
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
export default class Dynamic extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.icy-dynamic {
  width: 880px;
  height: auto;
}
</style>
