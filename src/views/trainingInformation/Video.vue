<template>
  <div class="icy-trainingInformation">
    <div>
      <Button class="icy-tab__button active">视频</Button>
      <Button class="icy-tab__button" @click="changeTab">文档</Button>
    </div>
    <ul class="icy-trainingInformation__content">
      <li v-for="i in 5" :key="i" @click="goToDetail">
        <training-item />
      </li>
    </ul>
    <!-- 分页 -->
    <el-pagination
      class="icy-page"
      background
      layout="prev, pager, next"
      :total="200"
      prev-text="上一页"
      next-text="下一页"
    />
  </div>
</template>

<script lang="ts">
/**
 * 培训详情-文档
 * @author cjq
 */
import { Component, Vue } from 'vue-property-decorator'
import TrainingItem from './components/TrainingItem.vue'

@Component({
  components: {
    TrainingItem
  }
})
export default class Document extends Vue {
  /** 跳转到文档列表页 */
  private changeTab(): void {
    this.$router.push({ path: '/trainingInformation/document' })
  }

  /** 跳转到视频详情页 */
  private goToDetail(): void {
    this.$router.push({ path: '/trainingInformation/videoDetail' })
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/element-ui';

.icy-trainingInformation {
  width: 1200px;
  &__content {
    margin-top: 50px;
    margin-bottom: 50px;
  }
}
</style>
