<template>
  <div class="icy-friendlinks">
    <img class="icy-friendlinks__img" src="@/assets/images/friendLinks.png" />
    <ul class="icy-friendlinks__ul">
      <li class="icy-friendlinks__ul--li">
        <img src="@/assets/images/fl1.png" />
      </li>
      <li class="icy-friendlinks__ul--li">
        <img src="@/assets/images/fl2.png" />
      </li>
      <li class="icy-friendlinks__ul--li">
        <img src="@/assets/images/fl3.png" />
      </li>
      <li class="icy-friendlinks__ul--li">
        <img src="@/assets/images/fl4.png" />
      </li>
      <li class="icy-friendlinks__ul--li">
        <img src="@/assets/images/fl5.png" />
      </li>
      <li class="icy-friendlinks__ul--li">
        <img src="@/assets/images/fl6.png" />
      </li>
      <li class="icy-friendlinks__ul--li">
        <img src="@/assets/images/fl7.png" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FriendLinks extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="scss">
@import '../../styles/variables';
.icy-friendlinks {
  border: 1px solid $color-gray-e0e0e0;
  width: 1132px;
  height: 132px;
  display: flex;
  flex-wrap: wrap;
  &__img {
    height: 42px;
    width: 136px;
  }
  &__ul {
    width: 1092px;
    height: 90px;
    display: flex;
    padding-left: 14px;
    align-items: center;
    &--li {
      img {
        width: 144px;
        height: 42px;
        margin-left: 6px;
        margin-right: 6px;
        cursor: pointer;
      }
    }
  }
}
</style>
