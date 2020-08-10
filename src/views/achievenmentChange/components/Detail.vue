<template>
  <div class="icy-detail">
    <p class="icy-detail__title">小型蓄能空调机和相变蓄冷材料科技成果</p>
    <p class="icy-detail__symbol"></p>
    <table class="icy-table">
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">鉴定编号:</td>
        <td class="icy-table__row1--secondgrid">中机电科鉴字[2018]第047号</td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">鉴定形式:</td>
        <td class="icy-table__row1--secondgrid">会议鉴定.</td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">组织鉴定单位:</td>
        <td class="icy-table__row1--secondgrid">中国机械工业联合会</td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">鉴定日期:</td>
        <td class="icy-table__row1--secondgrid">2020年10月8日</td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">鉴定批准日期:</td>
        <td class="icy-table__row1--secondgrid">2020年12月8日</td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">推广应用前景与措施:</td>
        <td class="icy-table__row1--secondgrid">xxxxxxxxxxxxxxxx</td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">主要技术文件目录及来源:</td>
        <td class="icy-table__row1--secondgrid">xxxxxxxxxxxxxxxx</td>
      </tr>
      <tr class="icy-table__row1">
        <td class="icy-table__row1--firstgrid">鉴定委员会专家测试报告:</td>
        <td class="icy-table__row1--secondgrid">xxxxxxxxxxxxxxxx</td>
      </tr>

      <tr class="icy-table__row2">
        <td class="icy-table__row2--firstgrid">简要技术说明及主要技术性能指标:</td>
        <td class="icy-table__row2--secondgrid">
          激光具有单色性好、方向性强、亮度高等特点。现已发现的激光工作物质有几千种，波长范围从软X射线到远红
          外。激光技术的核心是激光器，激光器的种类很多，可按工作物质、激励方式、运转方式、工作波长等不同方法
          分类。根据不同的使用要求，采取一些专门的技术提高输出激光的光束质量和单项技术指标，比较广泛应用的单
          元技术有共振腔设计与选模、倍频调谐、Q开关、锁模、稳频和放大技术等。
          为了满足军事应用的需要，主要发展了以下5项激光技术:①激光测距技术。它是在军事上最先得到实际应用的
          激光技术。20世纪60年代末,激光测距仪开始装备部队,现已研制生产出多种类型,大都采用钇铝石榴石激光器,
          测距精度为+5米左右。由于它能迅速准确地测出目标距离，广泛用于侦察测量和武器火控系统。②激光制导技术
          。激光制导武器精度高、结构比较简单、不易受电磁干扰，在精确制导武器中占有重要地位。70年代初，美国研
          制的激光制导航空炸弹在越南战场首次使用。80年代以来,激光制导导弹和激光制导炮弹的生产和装备数量也日
          渐增多。③激光通信技术。激光通信容量大、保密性好、 抗电磁干扰能力强。光纤通信已成为通信系统的发展重
          点。机载、星载的激光通信系统和对潜艇的激光通信系统也在研究发展中。④强激光技术。用高功率激光器制成
          的战术激光武器，可使人眼致盲和使光电探测器失效。利用高能激光束可能摧毁飞机、导弹、卫星等军事目标。
          用于致盲、防空等的战术激光武器，已接近实用阶段。用于反卫星、反洲际弹道导弹的战略激光武器,尚处于探
          索阶段。⑤激光模拟训练技术。用激光模拟器材进行军事训练和作战演习，不消耗弹药,训练安全，效果逼真.
          现已研制生产了多种激光模拟训练系统,在各种武器的射击训练和作战演习中广泛应用。此外，激光核聚变研究
          取得了重要进展，激光分离同位素进入试生产阶段,激光引信、激光陀螺已得到实际应用。 激光英文全名为Light
          Amplification by Stimulated Emission of Radiation (LASER)。于1960年面世， 是 一种因刺激产生辐射而强化的光。
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
/**
 *成果转化-成果库详情
 * @author wyr
 */
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Detail extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
/** 获奖项目 */
.icy-detail {
  width: 880px;
  height: auto;
  background-color: $color-white;
  padding: 56px 34px 80px;
  /**标题 */
  &__title {
    margin: 0px auto;
    text-align: center;
    font-family: '微软雅黑';
    font-size: 30px;
    font-weight: bold;
    color: $font-color-07519a;
  }
  /**红色图标 */
  &__symbol {
    width: 812px;
    height: 2px;
    margin-top: 48px;
    background-color: $color-red1;
  }
  /**表格 */
  .icy-table {
    border-collapse: collapse;
    margin-top: 40px;
    width: 812px;
    height: 706px;
    border: 1px solid $border-color-c1dbf0;
    font-family: '微软雅黑';
    font-size: 16px;
    color: $color-base;
    /**第一种行样式 */
    &__row1 {
      border: 1px solid $border-color-c1dbf0;
      height: 54px;
      text-align: left;

      /**第一个表格 */
      &--firstgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 280px;
        background-color: $background-color-f0f6fb;
        padding: 0px 0px 0px 16px;
        color: $font-color-e9100e;
      }
      &--secondgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 532px;
        padding: 0px 0px 0px 16px;
      }
    }
    /**第二种行样式 */
    &__row2 {
      border: 1px solid $border-color-c1dbf0;
      height: auto;
      text-align: left;
      vertical-align: top;
      &--firstgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 280px;
        background-color: $background-color-f0f6fb;
        padding: 15px 0px 0px 16px;
        color: $font-color-e9100e;
      }
      &--secondgrid {
        border: 1px solid $border-color-c1dbf0;
        width: 532px;
        padding: 15px 0px 0px 16px;
      }
    }
  }
}
</style>
