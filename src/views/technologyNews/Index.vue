<template>
  <div class="icy-technologynews icy-content__container">
    <ArticleSection title="科技动态" />
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
export default class TechnologyNews extends Vue {}
</script>

<style>
.icy-technologynews {
  padding: 0px 6px;
}
</style>
