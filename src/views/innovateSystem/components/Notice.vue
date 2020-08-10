<template>
  <div class="icy-notice">
    <ArticleSection title="通知公告" />
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
export default class Notice extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.icy-notice {
  width: 880px;
  height: auto;
}
</style>
