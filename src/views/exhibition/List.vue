<template>
  <div class="icy-exhibition">
    <div class="icy-exhibition__contentblock">
      <!--内容-->
      <dl class="icy-exhibition__content" v-for="item in data" :key="item.id" @click="goToDetail">
        <!--图片-->
        <dt>
          <img src="@/assets/images/exhibition1.png" alt="picture" class="icy-exhibition__content--picture" />
        </dt>
        <!--标题-->
        <dd>
          <p class="icy-exhibition__content--title">{{ item.title }}</p>
          <!--时间-->
          <p class="icy-exhibition__content--time">{{ item.time }}</p>
        </dd>
      </dl>

      <div class="icy-exhibition__page">
        <el-pagination
          class="icy-page"
          background
          layout="prev, pager, next"
          :total="1000"
          prev-text="上一页"
          next-text="下一页"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 *展览展示页
 * @author chenjiaqing
 */
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class List extends Vue {
  @Prop() private msg!: string

  private data: any = [
    {
      id: 1,
      img: '@/assets/images/exhibition1.png',
      title:
        '携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕',
      time: '2019-11-27'
    },
    {
      id: 2,
      img: '@/assets/images/exhibition2.png',
      title: '携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕',
      time: '2019-11-27'
    },
    {
      id: 3,
      img: '@/assets/images/exhibition3.png',
      title: '携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕',
      time: '2019-11-27'
    },
    {
      id: 4,
      img: '@/assets/images/exhibition4.png',
      title:
        '携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕活动在唐山启幕活动在唐山启幕活动在唐山启幕',
      time: '2019-11-27'
    },
    {
      id: 5,
      img: '@/assets/images/exhibition5.png',
      title: '携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕',
      time: '2019-11-27'
    },
    {
      id: 6,
      img: '@/assets/images/exhibition6.png',
      title:
        '携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕活动在唐山启幕活动在唐山启幕活动在唐山启幕活动在唐山启幕活动在唐山启幕',
      time: '2019-11-27'
    },
    {
      id: 7,
      img: '@/assets/images/exhibition7.png',
      title: '携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕',
      time: '2019-11-27'
    },
    {
      id: 8,
      img: '@/assets/images/exhibition7.png',
      title: '携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕',
      time: '2019-11-27'
    },
    {
      id: 9,
      img: '@/assets/images/exhibition9.png',
      title: '携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕',
      time: '2019-11-27'
    },
    {
      id: 10,
      img: '@/assets/images/exhibition4.png',
      title: '携手打造更高水平的产业链合作关系 "百强企业走进河钢"活动在唐山启幕',
      time: '2019-11-27'
    }
  ]

  private goToDetail(): void {
    this.$router.push('/exhibition/detail')
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
/* 展示内容框 */
.icy-exhibition {
  width: 1200px;
  padding-top: 30px;
  background-color: $color-white;
  vertical-align: baseline;
  /* 内容框设置间距 */
  &__contentblock {
    display: flex;
    width: 1168px;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;
    /* 单个内容框*/
    .icy-exhibition__content {
      margin-bottom: 24px;
      width: 558px;
      height: 160px;
      box-shadow: 0px 0px 5px 3px $font-color-f2f2f2;
      display: flex;
      cursor: pointer;
      /* 展示内容图片 */
      &--picture {
        width: 210px;
        height: 100%;
      }
      /* 展示内容标题 */
      &--title {
        height: 72px;
        margin-right: 40px;
        margin-left: 20px;
        font-weight: 700;
        margin-bottom: 30px;
        font-size: 16px;
        color: #333;
        line-height: 26px;
        text-align: left;
        margin-top: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      /* 展示内容时间 */
      &--time {
        margin-left: 20px;
        // margin-top: 45px;
        margin-bottom: 20px;
        font-size: $font-size-base;
        color: $color-gray-999;
        flex-direction: column-reverse;
        text-align: left;
        flex-direction: column-reverse;
      }
    }
  }
  &__page {
    width: 1168px;
    margin: 0 auto;
    text-align: center;
    padding-top: 40px;
  }
}
</style>
