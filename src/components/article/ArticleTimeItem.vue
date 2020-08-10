<template>
  <!-- 单个item -->
  <div class="icy-articleitem">
    <!-- 显示时间box -->
    <div class="icy-articleitem__time">
      <!-- 显示时间-日 -->
      <div class="icy-articleitem__time--day">12</div>
      <!-- 显示时间-年月 -->
      <div class="icy-articleitem__time--year">2020-03</div>
    </div>
    <div class="icy-articleitem__box">
      <!-- 内容标题 -->
      <p class="icy-articleitem__title">
        福特研发3D打印锁紧螺母福特研发3D打印锁紧螺母福特研发3D打印锁紧螺母福特研发3D打印锁紧螺母福特研发3D打印锁紧螺母福特研发3D打印锁紧螺母福特研发3D打印锁紧螺母福特研发3D打印锁紧螺母
      </p>
      <!-- 内容简介 -->
      <p class="icy-articleitem__introduction">
        6由于汽车安安全系统变得越来越复杂安全系统变得越来越复杂全系统变得越来越复杂，很多小愉转而瞄准合金车轮等汽车零部件，其中一种防止车轮被盗的方法是在每个车轮上用一个锁累螺母，而锁紧螺母需要特殊的道配器或螺栓才可松开。不过，即便如此，该方法也并非无懈可击。因此。福特产车公司的工程师们采用了3D打印技术，研发了独特的车轮锁紧螺母6由于汽车安安全系统变得越来越复杂安全系统变得越来越复杂全系统变得越来越复杂，很多小愉转而瞄准合金车轮等汽车零部件，其中一种防止车轮被盗的方法是在每个车轮上用一个锁累螺母，而锁紧螺母需要特殊的道配器或螺栓才可松开。不过，即便如此，该方法也并非无懈可击。因此。福特产车公司的工程师们采用了3D打印技术，研发了独特的车轮锁紧螺母
      </p>
      <!-- 查看详情 -->
      <p class="icy-articleitem__detail" @click="checkArticleDetail">查看详情></p>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * ygyuoo
 *
 */
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ArticleTimeItem extends Vue {
  private checkArticleDetail(): void {
    this.$router.push('/regulationDetail')
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
.icy-articleitem {
  width: 1140px;
  height: 192px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  border: 1px solid $color-gray-e0e0e0;
  flex-wrap: wrap;
  cursor: pointer;
  //时间box
  .icy-articleitem__time {
    width: 130px;
    height: 192px;
    text-align: center;
    //时间显示-日
    &--day {
      font-size: $font-size-largest-46;
      font-weight: bold;
      text-align: center;
      margin-top: 61px;
      margin-bottom: 0px;
      color: $color-base;
    }
    //时间显示-月
    &--year {
      font-size: $font-size-small;
      text-align: center;
      color: $color-base;
      margin-top: -5px;
    }
  }
  //标题简介查看详情box
  &__box {
    width: 980px;
    height: 192px;
  }
  //标题
  &__title {
    height: 20px;
    font-size: $font-size-base;
    font-weight: bold;
    color: $color-base;
    text-align: left;
    margin-top: 30px;
    margin-bottom: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  //简介
  &__introduction {
    font-size: $font-size-small;
    color: $color-gray-666;
    line-height: 24px;
    text-align: left;
    //限制行数
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  //查看详情
  &__detail {
    width: 980px;
    font-size: $font-size-small;
    color: $color-dark-blue-2650a6;
    text-align: right;
    cursor: pointer;
  }
}
</style>
