<template>
  <div class="icy-way">
    <ArticleSection title="管理办法" />
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
export default class Way extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.icy-way {
  width: 880px;
  height: auto;
}
</style>
