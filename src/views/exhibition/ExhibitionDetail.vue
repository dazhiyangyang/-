<template>
  <div class="icy-regulationdetail icy-content__container">
    <div class="icy-article__turn">
      <Button class="icy-article__turn--prev" label="上一篇">上一篇</Button>
      <Button class="icy-article__turn--next" label="下一篇">下一篇</Button>
    </div>
    <!-- 文档标题 -->
    <h2 class="icy-article__title">中国机械工业联合会能源互联网设备与技术分</h2>
    <!-- 时间，日期，发布人 -->
    <p class="icy-article__time">发布日期：2018-11-30 13：44：14 发布人：王瑞萍 来源：入会招募通知</p>
    <!-- 文档内容 -->
    <p class="icy-article__body">
      中国机械工业联合会能源互联网设备与技术分会(CMIF Energy Internet Equipment and Technology Branch Association
      (英文缩写: CMIF-EIE- TA) )是个由积极投身于能源互联网事业，从事能
      源互联网设备与技术研究开发、生产制造、应用服务的企事业单位、大专院校、科研机构、用户单位及
      其他相关机构自愿组成的非营利性社会团体。
      分会是中国机械工业联合会的分支机构，是中机联在能源互联网领域的行业工作平台。依托中机联成熟的行业工作体系，分会围绕能源
      互联网技术装备行业，积极开展政策研究行业统计、项目咨询、科技质量、标准检测、产需对接、国际合作、会展培训等多项行业工作，积极推
      动能源互联网的发展根据中机联总部安排，分会承担与全球能源互联网发展合作组织(GEIDCO)的日常联络、业务合作等工作，承接GEIDCO
      委派的相关业务工作。根据中机联总部安排，在能源互联网领域，由分会对口向能源局、工信部等部委汇报工作
      目前分会共有70家会员单位(含新申请入会单位)。。
    </p>
  </div>
</template>

<script>
/**
 * 展览展示详情页
 * @author qinhuan
 */
import { Component, Vue } from 'vue-property-decorator'

// 单个item
@Component
export default class ExhibitionDetail extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.icy-regulationdetail {
  padding: 34px 48px;
  .icy-article {
    width: 1100px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 50px;
    /* 标题样式 */
    &__title {
      font-size: $font-size-largest-32;
      font-weight: bold;
      color: $color-base;
      padding-bottom: 24px;
      text-align: center;
    }
    &__time {
      font-size: $font-size-small;
      color: $color-gray-666;
      padding-bottom: 40px;
    }
    /* 正文样式 */
    &__body {
      font-size: $font-size-base;
      color: $color-base;
      line-height: 28px;
    }
  }
}
.icy-article__turn {
  text-align: right;
  padding-bottom: 40px;
  &--prev {
    width: 96px;
    height: 42px;
    color: $color-white;
    background: $color-dark-blue-2650a6;
    margin-right: 10px;
    cursor: pointer;
  }
  &--next {
    width: 96px;
    height: 42px;
    background: $color-gray-fafafa;
    border: 1px solid $color-gray-e0e0e0;
    cursor: pointer;
  }
}
</style>
