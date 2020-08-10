<<<<<<< HEAD
<template>
  <div class="icy--layout__slide--left">
    <!-- <dl v-if="leftnavtype === 1">
    <dt class="icy--leftnav__title">栏目导航</dt>
    <button class="icy--leftnav__navlist">>>奖励办法</button>
    <button class="icy--leftnav__navlist">通知公告</button>
    <button class="icy--leftnav__navlist">获奖项目</button>
    </dl>-->
    <!-- 导航栏 -->
    <dl>
      <dt class="icy--leftnav__title">栏目导航</dt>

      <dd class="icy--leftnav__navlist" v-for="item in navlist" :key="item.id" @click="tabClick(item.path)">
        {{ item.title }}
      </dd>
    </dl>
    <!-- 搜索框 -->
    <p class="icy--leftnav__word">综合搜索:</p>
    <el-input class="icy--leftnav__input" v-model="input" placeholder="请输入项目名称"></el-input>
    <el-input class="icy--leftnav__input" v-model="input" placeholder="请输入单位名称"></el-input>
    <!-- 下拉选择框年份  -->
    <el-select class="icy--leftnav__yearselect" v-model="value1" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <!-- 下拉选择框获奖等级  -->
    <el-select class="icy--leftnav__levelselect" v-model="value2" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <!-- 下拉选择框专业分组  -->
    <el-select class="icy--leftnav__subjectselect" v-model="value3" placeholder="选择专业分组">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <button class="icy--leftnav__searchbutton">搜索</button>
  </div>
</template>

<script lang="ts">
/**
 *咨询中心-行业资讯
 * @author cjq
 */
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import informationCenterApi from '@/api/informationCenter'

@Component
export default class ColumnNavigation extends Vue {
  private listParams: any = {
    pageNo: 0,
    pageSize: 6,
    dictPid: '92',
    typeId: '93',
    serverNo: '54',
    pageType: '1'
  }

  /** 监听路由变化，请求不同数据 */
  @Watch('$route')
  private onRouteChange() {
    switch (this.$route.name) {
      case 'industry':
        this.listParams.typeId = '92'
        break
      case 'hot':
        this.listParams.typeId = '93'
        break
      case 'around':
        this.listParams.typeId = '94'
        break
      case 'other':
        this.listParams.typeId = '95'
        break
      default:
        break
    }
  }

  mounted() {
    this.getList()
    this.$store.dispatch('setNavIndex', this.$route.meta.navIndex)
  }
  /** 点击单个tab切换 */
  private tabClick(path: string) {
    console.log(1111)
    console.log(path)
    if (path !== location.pathname) {
      this.$router.push(path)
    }
  }

  /** 请求资讯中心列表 */
  private async getList() {
    try {
      console.log(1111)
      const res = await informationCenterApi.getList(this.listParams)
      console.log(res)
    } catch (e) {
      // console.log(e.msg)
    }
  }
  /* 左侧导航栏名 */
  private navlist: any[] = [
    { id: '1', title: '政策解读', path: '/greatEquipment/policy' },
    { id: '2', title: '首台鉴定', path: '/greatEquipment/authenticate' },
    { id: '3', title: '首台展示', path: '/greatEquipment/show' },
    { id: '4', title: '重大装备项目管理', path: '/greatEquipment/porject' },
    { id: '5', title: '重大装备联盟', path: '/greatEquipment/alliance' }
  ]
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
}
</script>
<style scoped lang="scss">
@import '@/styles/variables';
/* 展示内容框 */
.icy--layout__slide--left {
  //左侧导航栏
  .icy--leftnav {
    &__title {
      width: 260px;
      height: 50px;
      background-color: $background-color-9bbce7;
      text-align: left;

      margin-bottom: 10px;
      margin-top: 20px;
      font-size: 20px;
      padding: 12px;
      font-weight: bold;
      color: #fff;
    }
    &__navlist {
      width: 260px;
      height: 48px;
      background-color: #f1f5f8;
      color: $color-dark-blue-2650a6;
      text-align: left;
      margin-bottom: 10px;
      font-size: 18px;
      padding: 10px;

      cursor: pointer;
      &:hover {
        background-color: #d4e8fa;
      }
      &:active {
        background-color: #d4e8fa;
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
      background-color: #2650a6;
      border-radius: 1px;
      color: #fff;
    }
  }
}
</style>
=======
<template>
  <div class="icy--layout__slide--left">
    <!-- <dl v-if="leftnavtype === 1">
    <dt class="icy--leftnav__title">栏目导航</dt>
    <button class="icy--leftnav__navlist">>>奖励办法</button>
    <button class="icy--leftnav__navlist">通知公告</button>
    <button class="icy--leftnav__navlist">获奖项目</button>
    </dl>-->
    <!-- 导航栏 -->
    <dl>
      <dt class="icy--leftnav__title">栏目导航</dt>
      <dd class="icy--leftnav__navlist">>>奖励办法</dd>
      <dd class="icy--leftnav__navlist" v-for="item in navlist" :key="item.id" @click="tabClick(item.path)">
        {{ item.title }}
      </dd>
    </dl>
    <!-- 搜索框 -->
    <p class="icy--leftnav__word">综合搜索:</p>
    <el-input class="icy--leftnav__input" v-model="input" placeholder="请输入项目名称"></el-input>
    <el-input class="icy--leftnav__input" v-model="input" placeholder="请输入单位名称"></el-input>
    <!-- 下拉选择框年份  -->
    <el-select class="icy--leftnav__yearselect" v-model="value1" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <!-- 下拉选择框获奖等级  -->
    <el-select class="icy--leftnav__levelselect" v-model="value2" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <!-- 下拉选择框专业分组  -->
    <el-select class="icy--leftnav__subjectselect" v-model="value3" placeholder="选择专业分组">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <button class="icy--leftnav__searchbutton">搜索</button>
  </div>
</template>

<script lang="ts">
/**
 *咨询中心-行业资讯
 * @author cjq
 */
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import informationCenterApi from '@/api/informationCenter'

@Component
export default class ColumnNavigation extends Vue {
  private listParams: any = {
    pageNo: 0,
    pageSize: 6,
    dictPid: '92',
    typeId: '93',
    serverNo: '54',
    pageType: '1'
  }

  /** 监听路由变化，请求不同数据 */
  @Watch('$route')
  private onRouteChange() {
    switch (this.$route.name) {
      case 'industry':
        this.listParams.typeId = '92'
        break
      case 'hot':
        this.listParams.typeId = '93'
        break
      case 'around':
        this.listParams.typeId = '94'
        break
      case 'other':
        this.listParams.typeId = '95'
        break
      default:
        break
    }
  }

  mounted() {
    this.getList()
    this.$store.dispatch('setNavIndex', this.$route.meta.navIndex)
  }
  /** 点击单个tab切换 */
  private tabClick(path: string) {
    if (path !== location.pathname) {
      this.$router.push(path)
    }
  }

  /** 请求资讯中心列表 */
  private async getList() {
    try {
      console.log(1111)
      const res = await informationCenterApi.getList(this.listParams)
      console.log(res)
    } catch (e) {
      // console.log(e.msg)
    }
  }
  /* 左侧导航栏名 */
  private navlist: any[] = [
    { id: '1', title: '政策解读', path: '/greatEquipment/policy' },
    { id: '2', title: '首台鉴定', path: '/greatEquipment/authenticate' },
    { id: '3', title: '首台展示', path: '/greatEquipment/show' },
    { id: '4', title: '重大装备项目管理', path: '/greatEquipment/porject' },
    { id: '5', title: '重大装备联盟', path: '/greatEquipment/alliance' }
  ]
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
}
</script>
<style scoped lang="scss">
@import '@/styles/variables';
/* 展示内容框 */
.icy--layout__slide--left {
  //左侧导航栏
  .icy--leftnav {
    &__title {
      width: 260px;
      height: 50px;
      background-color: $background-color-9bbce7;
      text-align: left;

      margin-bottom: 10px;
      margin-top: 20px;
      font-size: 20px;
      padding: 12px;
      font-weight: bold;
      color: #fff;
    }
    &__navlist {
      width: 260px;
      height: 48px;
      background-color: #f1f5f8;
      color: $color-dark-blue-2650a6;
      text-align: left;
      margin-bottom: 10px;
      font-size: 18px;
      padding: 10px;

      cursor: pointer;
      &:hover {
        background-color: #d4e8fa;
      }
      &:active {
        background-color: #d4e8fa;
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
      background-color: #2650a6;
      border-radius: 1px;
      color: #fff;
    }
  }
}
</style>
>>>>>>> lhy_dev
