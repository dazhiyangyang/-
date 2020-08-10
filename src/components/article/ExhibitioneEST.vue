<template>
  <div class="icy-exhibitionest">
    <!-- 查看更多 -->
    <!-- 展览展示 列表-->
    <ul class="icy-exhibitionest__ui">
      <li class="icy-exhibitionest__ui--item" v-for="(item, index) in data" :key="index">
        <InformationExhibition :information="item" :type="1" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import InformationExhibition from '@/components/article/InformationExhibition.vue'

@Component({
  components: {
    InformationExhibition
  }
})
export default class ExhibitionEST extends Vue {
  @Prop() private data!: number
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
.icy-exhibitionest {
  &__ui {
    border-bottom: 1px dashed $color-gray-e0e0e0;
    padding-top: 26px;
    padding-bottom: 26px;
  }
}
</style>
