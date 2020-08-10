<template>
  <div class="icy-platehead">
    <div class="icy-platehead__title">
      <span class="icy-platehead__title--cn">{{ title }}</span>
    </div>
    <div class="icy-platehead__hr"></div>
  </div>
  <!-- <Article-detail :type="1" /> -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class PlateHead extends Vue {
  @Prop() private title!: string
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
.icy-platehead {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
  &__title {
    display: flex;
    align-items: center;
    &--cn {
      display: inline-block;
      border-bottom: 2px solid $background-color-07519a;
      height: 48px;
      font-size: $font-size-largest-24;
      font-weight: bold;
      color: $font-color-07519a;
    }
  }
  &__hr {
    width: 100%;
    height: 2px;
    background-color: #f2f4f7;
    &--left {
      float: left;
      width: 96px;
      height: 2px;
      background-color: $background-color-07519a;
    }
  }
}
</style>
