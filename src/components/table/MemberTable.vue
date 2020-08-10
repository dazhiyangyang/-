<template>
  <div class="icy-membertable">
    <img src="@/assets/images/logo_title.png" alt="中国机械工业联合会智能制造分会" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MemberTable extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="scss">
.icy-header {
  width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  text-align: left;
}
</style>
