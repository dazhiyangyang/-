<template>
  <div class="icy-layout">
    <!-- 公共头部 -->
    <Header />
    <!-- 导航栏 -->
    <Nav />
    <!-- 面包屑 -->
    <BreadCrumb v-if="this.$store.state.navIndex !== 0" />
    <div class="icy-layout__inner">
      <router-view />

      <Footer />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/base/Header'
import BreadCrumb from '@/components/base/BreadCrumb'
import Footer from '@/components/base/Footer'
import Nav from '@/components/base/Nav'

@Component({
  components: {
    Header,
    Footer,
    Nav,
    BreadCrumb
  }
})
export default class Index extends Vue {}
</script>
<style scoped lang="scss">
@import '@/styles/variables';
.icy-layout__inner {
  background: #f0f5fa;
}
</style>
