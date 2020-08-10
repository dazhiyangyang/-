<template>
  <div class="icy-readmore" :style="{ width: currentReadMore.width }">
    <div class="icy-readmore__title">
      <div class="icy-readmore__title--vertical"></div>
      <b class="icy-readmore__title--cn">{{ title }}</b>
    </div>
    <div class="icy-readmore__word">
      <span>更多>></span>
    </div>
    <div class="icy-readmore__hr"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { readmore } from '@/utils/constant'
// import { ReadMore } from '@/types/constant'

@Component
export default class ReadMore extends Vue {
  @Prop() private readmoreIndex!: number
  @Prop() private title!: string
  private currentReadMore: Constant.ReadMore = {
    cnTitle: '',
    enTitle: '',
    width: '100%'
  }

  mounted() {
    this.currentReadMore = readmore[this.readmoreIndex]
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/variables';

.icy-readmore {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding-bottom: 20px;
  margin: 0 auto;
  flex-wrap: wrap;
  &__title {
    display: flex;
    align-items: center;
    &--vertical {
      height: 16px;
      width: 4px;
      background-color: #07519a;
      margin-right: 12px;
    }
    &--cn {
      font-size: $font-size-large;
      color: $color-dark-blue-2650a6;
      margin-right: 10px;
    }
    &--en {
      font-size: $font-size-large;
      color: $color-dark-blue-2650a6;
    }
  }
  &__more {
    color: $color-gray-666;
    font-size: $font-size-base;
  }
  &__hr {
    width: 100%;
    height: 4px;
    background-color: #f2f4f7;
    margin-top: 14px;
  }
}
</style>
