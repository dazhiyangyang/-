<template>
  <div class="icy-alliance icy--layout__slide--right">
    <ArticleSection title="重大装备联盟" />
  </div>
</template>

<script lang="ts">
/**
 * 重大装备联盟
 * author:haoyu
 */
import { Component, Vue } from 'vue-property-decorator'
import ArticleSection from '@/components/article/ArticleSection.vue'

@Component({
  components: {
    ArticleSection
  }
})
export default class Alliance extends Vue {}
</script>
