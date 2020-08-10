<template>
  <div class="icy-traininginformationdetail">
    <!-- 顶部简介 -->
    <IntroSimple />
    <!-- 详情 -->
    <IntroDetail />
  </div>
</template>

<script>
/**
 * 政策法规详情页
 * @author qinhuan
 */
import { Component, Vue } from 'vue-property-decorator'
import IntroSimple from './components/IntroSimple'
import IntroDetail from './components/IntroDetail'

@Component({
  components: {
    IntroSimple,
    IntroDetail
  }
})
export default class TrainingInformationDetail extends Vue {}
</script>

<style scoped lang="scss">
.icy-traininginformationdetail {
  width: 1200px;
}
</style>
