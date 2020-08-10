<template>
  <div class="icy-breadcrumb">
    <div class="icy-breadcrumb__title">
      <h2 class="icy-breadcrumb__title--cn">{{ breadcrumbs[0].meta.title }}</h2>
      <p class="icy-breadcrumb__title--en">{{ breadcrumbs[0].meta.titleEn }}</p>
    </div>
    <div class="icy-breadcrumb__content">
      当前位置：
      <el-breadcrumb separator=">">
        <transition-group name="breadcrumb">
          <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
            <span v-if="item.redirect === 'noredirect' || index == breadcrumbs.length - 1" class="no-redirect">
              {{ item.meta.title }}
            </span>
            <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { RouteRecord } from 'vue-router'
// import pathToRegexp from 'path-to-regexp'

@Component
export default class Breadcrumb extends Vue {
  private breadcrumbs: RouteRecord[] = []

  private created() {
    this.getBreadcrumb()
  }

  @Watch('$route')
  private onRouteChange() {
    this.getBreadcrumb()
  }

  private getBreadcrumb() {
    const matched = this.$route.matched.filter(item => item.name)
    this.breadcrumbs = matched.filter(item => {
      return item.meta && item.meta.title && item.meta.breadcrumb !== false
    })
  }

  // private pathCompile(path: string) {
  //   const { params } = this.$route
  //   // const toPath = pathToRegexp.compile(path)
  //   // return toPath(params)
  // }

  private handleLink(item: { redirect: string; path: string }) {
    const { redirect, path } = item
    if (redirect) {
      this.$router.push(redirect)
      return
    }
    // this.$router.push(this.pathCompile(path))
    this.$router.push({ path })
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.icy-breadcrumb {
  width: 100%;
  height: 160px;
  background: url('../../assets/images/breadcrumb_bg.png') no-repeat;
  background-size: cover;
  padding-top: 30px;
  &__title {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &--cn {
      margin-right: 6px;
      font-size: $font-size-largest-24;
      color: $color-white;
    }
    &--en {
      font-size: $font-size-small;
      color: $background-color-9bbce7;
    }
  }
  &__content {
    width: 1200px;
    padding-top: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: $font-size-small;
    color: $color-white;
    /deep/ .el-breadcrumb__item:hover {
      color: $color-white;
    }
    /deep/ .el-breadcrumb__inner {
      color: $color-white;
      font-weight: normal;
      a {
        color: $color-white;
        font-weight: normal;
      }
    }
    /deep/ .el-breadcrumb__separator {
      color: $color-white;
      font-weight: normal;
    }
    .no-redirect {
      color: $color-white;
      font-weight: normal;
    }
  }
}
</style>
