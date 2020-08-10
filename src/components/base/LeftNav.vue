<template>
  <div class="icy--layout__slide--left">
    <!-- 不带表单的左侧导航栏 -->
    <dl v-if="type === 1">
      <dt class="icy--leftnav__title">栏目导航</dt>
      <dd
        class="icy--leftnav__navlist"
        :class="{ active: clickIndex === index }"
        v-for="(item, index) in navlist1"
        :key="index"
        @click="tabClick(index, item.path)"
      >
        <img src="@/assets/images/arrowNav.png" class="icy--leftnav__navlist--arrowimg" alt="" />{{ item.name }}
      </dd>
    </dl>
    <!-- 带表单 -->
    <dl v-if="type === 2">
      <dt class="icy--leftnav__title">栏目导航</dt>
      <dd
        class="icy--leftnav__navlist"
        :class="{ active: 2 === index }"
        v-for="(item, index) in navlist1"
        :key="index"
        @click="tabClick(index, item.path)"
      >
        >>{{ item.name }}
      </dd>
      <dd>
        <!-- 搜索框 -->
        <p class="icy--leftnav__word">综合搜索:</p>
        <el-input class="icy--leftnav__input" placeholder="请输入项目名称"></el-input>
        <el-input class="icy--leftnav__input" placeholder="请输入单位名称"></el-input>
        <!-- 下拉选择框年份  -->
        <el-select class="icy--leftnav__yearselect" v-model="value1" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
        <!-- 下拉选择框获奖等级  -->
        <el-select class="icy--leftnav__levelselect" v-model="value2" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
        <!-- 下拉选择框专业分组  -->
        <el-select class="icy--leftnav__subjectselect" v-model="value3" placeholder="选择专业分组">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
        <button class="icy--leftnav__searchbutton">搜索</button>
      </dd>
    </dl>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'

@Component
export default class LeftNav extends Vue {
  @Prop() private navlist1!: any[]
  @Prop() private type!: number
  /* 左侧导航栏名 */
  private options = [
    {
      value: '选项1',
      label: '黄金糕'
    },
    {
      value: '选项2',
      label: '双皮奶'
    },
    {
      value: '选项3',
      label: '蚵仔煎'
    },
    {
      value: '选项4',
      label: '龙须面'
    },
    {
      value: '选项5',
      label: '北京烤鸭'
    }
  ]

  private tabClick(index: number, path: string) {
    this.clickIndex = index
    this.$store.state.clickIndex = index
    console.log(this.$store.state.clickIndex)
    if (path !== location.pathname) {
      this.$router.push({ path })
    }
  }
  private clickIndex = this.$store.state.clickIndex
  mounted() {
    console.log(1111111111111)
    console.log(this.$store.state.clickIndex)
    // console.log(this.navlist1)
    // console.log(this.$store.state.navIndex)
    // console.log(this.clickIndex)
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
/* 展示内容框 */
.icy--layout__slide--left {
  //左侧导航栏
  .icy--leftnav {
    &__title {
      width: 260px;
      height: 50px;
      background-color: $background-color-9bbce7;
      background: url('../../assets/images/navbackground.png');
      text-align: left;
      margin-bottom: 10px;
      margin-top: 20px;
      font-size: $font-size-largest;
      padding: 12px;
      font-weight: bold;
      color: $color-white;
    }
    &__navlist {
      width: 260px;
      height: 48px;
      background-color: $background-color-f1f5f8;
      color: $color-dark-blue-2650a6;
      text-align: left;
      margin-bottom: 10px;
      font-size: $font-size-large;
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color: $background-color-d4e8fa;
      }
      &--arrowimg {
        margin-right: 12px;
      }
    }

    //综合搜索文字
    &__word {
      margin-top: 20px;
      margin-bottom: 14px;
      font-size: 20px;
    }
    //elementui样式
    //输入框
    &__input {
      width: 260px;
      height: 40px;
      margin-bottom: 10px;
    }
    //年份选择
    &__yearselect {
      width: 140px;
      height: 40px;
      margin-right: 10px;
    }
    //获奖等级选择
    &__levelselect {
      width: 110px;
      height: 40px;
      margin-bottom: 10px;
    }
    //专业选择
    &__subjectselect {
      width: 196px;
      height: 40px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
    //搜索按钮
    &__searchbutton {
      width: 54px;
      height: 40px;
      background-color: $color-dark-blue-2650a6;
      border-radius: 1px;
      color: $color-white;
    }
  }
}
.icy--leftnav__navlist.active {
  background-color: $background-color-d4e8fa;
}
</style>
