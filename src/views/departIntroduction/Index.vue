<template>
  <div class="icy-aboutim icy-content__container">
    <!-- 部门简介 -->
    <div class="icy-aboutim__title">部门简介</div>
    <div class="icy-aboutim__author">中国机械工业联合会科技工作部(重大装备项目办公室)</div>
    <div class="icy-aboutim__tinytitle">主要工作职能</div>
      <ul class="icy-aboutim__content">
      <li>1.开展科技成果和新产品的鉴定工作; </li>
      <li>2.组织行业专家对科技项目及新产品进行技术评审; </li>
      <li>3.组织申报和推荐年度科技项目;</li>
      <li>4.组织申报和推荐创新人才、杰出工程师、专利奖、国家科技创新平台等工作;</li>
      <li>5.组织中国机械工业科学技术奖的评审工作和国家科技奖项目申报工作;组织中国工业大奖的申报和推荐工作;</li>
      <li>6.组织开展行业创新体系建设和创新机构评审、验收和日常管理工作;</li>
      <li>7.开展新技术，新产品的推广应用和技术培训工作;</li>
      <li>8.受政府部门委托，开展重大技术装备国产化研制项目的调研、论证和组织工作;</li>
      <li>9.协助有关部委组织机械行业企业进行重大装备项目的实施，攻关等工作;</li>
      <li>10.负责智能制造分会、绿色制造分会、绿色制造创新联盟等管理和日常工作;</li>
      <li>11.负责完成领导交办事项。</li>
    </ul> 
    <div class="icy-aboutim__tinytitle">联系电话</div>
    <ul class="icy-aboutim__content icy-aboutim__tel" >
      <li>主任:李冬茹（副秘书长兼 <span>电话: 010-68595213</span></li>
      <li>副主任:温顺如 <span >电话: 010-68594936 </span></li>
      <li>副主任兼重大装备处处长:杨铁成 <span >电话: 010-68595089</span></li>
      <li>成果推广处副处长:刘前军 <span >电话: 010-68595234</span></li>
      <li>重大装备项目办公室(副处级):王倩 <span >电话: 010-68594745</span></li>
      <li>奖励办公室：010-68595213</li>
      <li>部门电话: 010-68594886、68595466、68594919</li>
    </ul>   
    <div class="icy-aboutim__close">【关闭】</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

</script>

<style lang="scss" scoped>
@import '@/styles/variables';
.icy-aboutim{
  padding-top: 56px;
  padding-bottom: 50px;
  &__title {
    font-size: $font-size-largest-32;
    color: $font-color-07519a;
    text-align: center;
    font-weight: 500;
    font-weight: bold;
  }
  &__author {
    font-size: $font-size-base;
    color: $color-base;
    margin-top: 28px;
  }
  &__tinytitle {
    font-size: $font-size-large;
    color: $color-base;
    text-align: left;
    margin-top: 40px;
    margin-bottom: 28px;
    margin-left: 50px;
    font-weight: bold;
  }
  &__content li{
    font-size: $font-size-base;
    color: $color-base;
    text-align: left;
    margin-bottom: 20px;
    margin-left: 50px;} 
  &__content span{  
    float: right;
  }
  &__tel{
    width: 500px;
  }
  &__close {
    text-align: right;
    font-size: $font-size-base;
    color: $color-base;
    margin-right: 50px;
    margin-top: 100px;
  }
}
</style>
