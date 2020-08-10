<template>
  <div>
    <!-- 文章详情 -->
    <div v-if="type === 1" class="icy-article">
      <!-- 文档标题 -->
      <p class="icy-article__title">分会简介</p>
      <!--  -->

      <!-- 文档内容 -->
      <p class="icy-article__body">
        中国机械工业联合会能源互联网设备与技术分会(CMIF Energy Internet Equipment and Techno logy Branch Association
        (英文缩写: CMIF-EIE- TA) )是个由积极投身于能源互联网事业，从
        事能源互联网设备与技术研究开发、生产制造、应用服务的企事业单位、大专院校、科研机构、用户单 位及
        其他相关机构自愿组成的非营利性社会团体。分会是中国机械工业联合会的分支机构，是中机
        联在能源互联网领域的行业工作平台。依托中机联成熟的行业工作体系，分会围绕能源互联网技术装
        备行业，积极开展政策研究行业统计、项目咨询、科技质量、标准检测、产需对接、国际合作、会展
        培训等多项行业工作，积极推动能源互联网的发展根据中机联总部安排，分会承担与全球能源互联网
        发展合作组织(GEIDCO)的日常联络、业务合作等工作，承接GEIDCO 委派的相关业务工作。根据中机
        联总部安排，在能源互联网领域，由分会对口向能源局、工信部等部委汇报工作目前分会共有70家会
        员单位(含新申请入会单位)。。
      </p>
    </div>
    <div v-if="type === 2" class="icy-regulationdetail">
      <!-- 文档标题 -->
      <h2 class="icy-article__title">中国机械工业联合会能源互联网设备与技术分</h2>

      <!-- 文档内容 -->
      <p class="icy-article__body">
        绿色制造(Green Manufacturing-GM)是一种在保证产品的功能、质量、成本的前提下，综合考虑环境
        影响和资源效率的现代制造模式, 通过开展技术创新及系统优化，使产品在设计、制造、物流、使用、
        回收拆解与再利用等全生命周期过程中，对环境影响最小、资源能源利用率最高、人体健康与社会危害
        最小，并使企业经济效益与社会效益协调优化。 绿色制造产业技术创新联盟是按照产业技术创新链推
        进绿色制造模式，实现协同创新的有效组织方式。绿色联盟现由39家企业、大学、院所、行业协（学 ）会组成。
        绿色制造产业技术创新联盟的宗旨是： 以企业为主体，按照平等自愿、风险共担、利益
        共享的原则，集聚国内优势创新资源，建立多形式、多层次的组织模式，形成绿色制造技术研究的长
        效机制，促进“产学研用”有效结合； 以装备制造业的技术需求和提升产业核心竞争力为导向，积极
        宣传、普及绿色制造理念，开展绿色制造技术与装备的研发和创新成果的推广； 促进绿色制造技术在
        节能、减排、降耗、废旧资源回收、循环利用和再制造等产业技术领域的应用
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ArticleDetail extends Vue {
  @Prop() private type!: number
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables';
.icy-article {
  width: 800px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 50px;
  /* 标题样式 */
  &__title {
    font-size: $font-size-largest-30;
    font-weight: bold;
    color: $color-dark-blue-2650a6;
    margin-bottom: 40px;
    text-align: center;
  }
  /* 正文样式 */
  &__body {
    font-size: $font-size-base;
    color: $color-base;
    line-height: 28px;
    text-align: left;
    min-height: 600px;
  }
}
.icy-regulationdetail {
  padding: 34px 48px;
  .icy-article {
    width: 800px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 50px;
    /* 标题样式 */
    &__title {
      font-size: $font-size-largest-32;
      font-weight: bold;
      color: $color-dark-blue-2650a6;

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
      line-height: 37px;
      text-align: left;
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
