<template>
  <div class="icy-exhibition">
    <!-- 查看更多 -->
    <ReadMore readmoreIndex="2" :title="title" />
    <!-- 展览展示 列表-->
    <ul class="icy-exhibition__ui">
      <li v-for="item in data" :key="item.id">
        <InformationExhibition :information="item" :type="type" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
/**
 * 首页-->政策法规--通知公告--规划咨询--项目研究--会议报名
 * author:haoyu
 */
import { Component, Prop, Vue } from 'vue-property-decorator'
import ReadMore from '@/components/article/ReadMore.vue'
import InformationExhibition from '@/components/article/InformationExhibition.vue'

@Component({
  components: {
    ReadMore,
    InformationExhibition
  }
})
export default class Exhibition extends Vue {
  @Prop() private type!: number
  @Prop() private data!: number
  @Prop() private title!: string

  // private data: any = [
  //   { id: 1, img: '@/assets/images/information1.png', title: '携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕', time: '2019-11-27' },
  //   { id: 2, img: '@/assets/images/information1.png', title: '携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕', time: '2019-11-27' },
  //   { id: 3, img: '@/assets/images/information1.png', title: '携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕', time: '2019-11-27' }
  // ]
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
.icy-exhibition {
  &__ui li {
    border-bottom: 1px dashed $color-gray-e0e0e0;
  }
  &__ui li:hover {
    color: $color-red;
  }
}
</style>
