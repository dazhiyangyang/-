import Vue from 'vue'
import Router from 'vue-router'
// import Layout from "../views/layout/Layout.vue";

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    name: '登陆',
    component: () => import('@/views/login/Index.vue'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/layout/Index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        title: '首页展示',
        titleEn: 'Home',
        meta: { navIndex: 0, title: '首页展示', titleEn: 'Home' },
        component: () => import('@/views/home/Index.vue'),
        hidden: false
      },
      {
        path: '/departIntroduction',
        name: 'departIntroduction',
        title: '部门简介',
        titleEn: 'Introduction of department',
        meta: { navIndex: 1, title: '部门简介', titleEn: 'Introduction of department' },
        component: () => import('@/views/departIntroduction/Index.vue'),
        hidden: false
      },
      {
        path: '/technologyNews',
        name: 'technologyNews',
        title: '科技动态',
        titleEn: 'Technology News',
        meta: { navIndex: 2, title: '科技动态', titleEn: 'Technology News ' },
        component: () => import('@/views/technologyNews/Index.vue'),
        hidden: false
      },

      {
        path: '/scienceAwards',
        name: 'scienceAwards',
        redirect: '/scienceAwards/way',
        title: '奖励工作',
        titleEn: 'Science Awards',
        meta: { navIndex: 3, title: '科技奖励', titleEn: 'Science Awards' },
        component: () => import('@/views/scienceAwards/Index.vue'),
        hidden: false,
        children: [
          {
            path: '/scienceAwards/way',
            name: 'way',
            title: '奖励办法',
            titleEn: 'way',
            meta: { navIndex: 3, title: '奖励办法', titleEn: 'way' },
            component: () => import('@/views/scienceAwards/components/Way.vue'),
            hidden: false
          },
          {
            path: '/scienceAwards/notice',
            name: 'notice',
            title: '通知公告',
            titleEn: 'notice',
            meta: { navIndex: 3, title: '通知公告', titleEn: 'notice' },
            component: () => import('@/views/scienceAwards/components/Notice.vue'),
            hidden: false
          },
          {
            path: '/scienceAwards/subject',
            name: 'subject',
            title: '获奖项目',
            titleEn: 'subject',
            meta: { navIndex: 3, title: '获奖项目', titleEn: 'subject' },
            component: () => import('@/views/scienceAwards/components/Subject.vue'),
            hidden: false
          },
          {
            path: '/scienceAwards/detail',
            name: 'detail',
            title: '获奖项目详情',
            titleEn: 'detail',
            meta: { navIndex: 3, title: '获奖项目详情', titleEn: 'detail' },
            component: () => import('@/views/scienceAwards/components/Detail.vue'),
            hidden: false
          }
        ]
      },
      {
        path: '/innovateSystem',
        name: 'innovateSystem',
        redirect: '/innovatesystem/exploration',
        title: '创新体系',
        titleEn: 'Innovate System',
        meta: { navIndex: 4, title: '创新体系', titleEn: 'Innovate System' },
        component: () => import('@/views/innovateSystem/Index.vue'),
        hidden: false,
        children: [
          {
            path: '/innovateSystem/exploration',
            name: 'exploration',
            title: '机械工业工程研究中心',
            titleEn: 'exploration',
            meta: { navIndex: 4, title: '机械工业工程研究中心', titleEn: 'exploration' },
            component: () => import('@/views/innovateSystem/components/Exploration.vue'),
            hidden: false
          },
          {
            path: '/innovateSystem/lab',
            name: 'lab',
            title: '机械工业重点实验室',
            titleEn: 'lab',
            meta: { navIndex: 4, title: '机械工业重点实验室', titleEn: 'lab' },
            component: () => import('@/views/innovateSystem/components/Lab.vue'),
            hidden: false
          },
          {
            path: '/innovateSystem/innovate',
            name: 'innovate',
            title: '机械工业创新中心',
            titleEn: 'innovate',
            meta: { navIndex: 4, title: '机械工业创新中心', titleEn: 'innovate' },
            component: () => import('@/views/innovateSystem/components/Innovate.vue'),
            hidden: false
          },

          {
            path: '/innovateSystem/dynamic',
            name: 'dynamic',
            title: '最新动态',
            titleEn: 'dynamic',
            meta: { navIndex: 4, title: '最新动态', titleEn: 'dynamic' },
            component: () => import('@/views/innovateSystem/components/Dynamic.vue'),
            hidden: false
          },
          {
            path: '/innovateSystem/results',
            name: 'results',
            title: '研究成果',
            titleEn: 'results',
            meta: { navIndex: 4, title: '研究成果', titleEn: 'results' },
            component: () => import('@/views/innovateSystem/components/Results.vue'),
            hidden: false
          },
          {
            path: '/innovateSystem/notice',
            name: 'notice',
            title: '通知公告',
            titleEn: 'notice',
            meta: { navIndex: 4, title: '通知公告', titleEn: 'notice' },
            component: () => import('@/views/innovateSystem/components/Notice.vue'),
            hidden: false
          },
          {
            path: '/innovateSystem/way',
            name: 'way',
            title: '管理方法',
            titleEn: 'way',
            meta: { navIndex: 4, title: '管理方法', titleEn: 'way' },
            component: () => import('@/views/innovateSystem/components/Way.vue'),
            hidden: false
          }
        ]
      },

      {
        path: '/greatEquipment',
        name: 'greatEquipment',
        redirect: '/greatEquipment/policy',
        title: '重大装备',
        titleEn: 'Great Equipment',
        meta: { navIndex: 5, title: '重大装备', titleEn: 'Great Equipment' },
        component: () => import('@/views/greatEquipment/Index.vue'),
        hidden: false,
        children: [
          {
            path: '/greatEquipment/policy',
            name: 'policy',
            title: '政策解读',
            titleEn: 'policy',
            meta: { navIndex: 5, title: '政策解读', titleEn: 'policy' },
            component: () => import('@/views/greatEquipment/components/Policy.vue'),
            hidden: false
          },
          {
            path: '/greatEquipment/authenticate',
            name: 'authenticate',
            title: '首台鉴定',
            titleEn: 'authenticate',
            meta: { navIndex: 5, title: '首台鉴定', titleEn: 'authenticate' },
            component: () => import('@/views/greatEquipment/components/Authenticate.vue'),
            hidden: false
          },
          {
            path: '/greatEquipment/authenticateInformation',
            name: 'authenticateInformation',
            title: '鉴定信息',
            titleEn: 'authenticateInformation',
            meta: { navIndex: 5, title: '鉴定信息', titleEn: 'authenticateInformation' },
            component: () => import('@/views/greatEquipment/components/AuthenticateInformation.vue'),
            hidden: false
          },
          {
            path: '/greatEquipment/show',
            name: 'show',
            title: '首台展示',
            titleEn: 'show',
            meta: { navIndex: 5, title: '首台展示', titleEn: 'show' },
            component: () => import('@/views/greatEquipment/components/Show.vue'),
            hidden: false
          },
          {
            path: '/greatEquipment/porject',
            name: 'porject',
            title: '重大装备项目管理',
            titleEn: 'porject',
            meta: { navIndex: 5, title: '重大装备项目管理', titleEn: 'porject' },
            component: () => import('@/views/greatEquipment/components/Porject.vue'),
            hidden: false
          },
          {
            path: '/greatEquipment/alliance',
            name: 'alliance',
            title: '重大装备联盟',
            titleEn: 'alliance',
            meta: { navIndex: 5, title: '重大装备联盟', titleEn: 'alliance' },
            component: () => import('@/views/greatEquipment/components/Alliance.vue'),
            hidden: false
          }
        ]
      },
      {
        path: '/technologyAuthenticate',
        name: 'technologyAuthenticate',
        redirect: '/technologyAuthenticate/list',
        title: '技术鉴定',
        titleEn: 'Technology Authenticate',
        meta: { navIndex: 6, title: '技术鉴定', titleEn: 'Technology Authenticate' },
        component: () => import('@/views/technologyAuthenticate/Index.vue'),
        hidden: false,
        children: [
          {
            path: '/technologyAuthenticate/list',
            name: 'list',
            title: '鉴定列表',
            titleEn: 'list',
            meta: { navIndex: 6, title: '鉴定列表', titleEn: 'list' },
            component: () => import('@/views/technologyAuthenticate/components/List.vue'),
            hidden: false
          },
          {
            path: '/technologyAuthenticate/apply',
            name: 'apply',
            title: '鉴定申请',
            titleEn: 'apply',
            meta: { navIndex: 6, title: '鉴定申请', titleEn: 'apply' },
            component: () => import('@/views/technologyAuthenticate/components/Apply.vue'),
            hidden: false
          },

          {
            path: '/technologyAuthenticate/detail',
            name: 'detail',
            title: '鉴定详情',
            titleEn: 'detail',
            meta: { navIndex: 6, title: '鉴定详情', titleEn: 'detail' },
            component: () => import('@/views/technologyAuthenticate/components/Detail.vue'),
            hidden: false
          }
        ]
      },
      {
        path: '/achievenmentChange',
        name: 'achievenmentChange',
        redirect: '/achievenmentChange/information',
        title: '成果转化',
        titleEn: 'Achievenment Change',
        meta: { navIndex: 7, title: '成果转化', titleEn: 'Achievenment Change' },
        component: () => import('@/views/achievenmentChange/Index.vue'),
        hidden: false,
        children: [
          {
            path: '/achievenmentChange/information',
            name: 'information',
            title: '搜索案例成果信息',
            titleEn: 'information',
            meta: { navIndex: 7, title: '搜索案例成果信息', titleEn: 'information' },
            component: () => import('@/views/achievenmentChange/components/Information.vue'),
            hidden: false
          },
          {
            path: '/achievenmentChange/storeroom',
            name: 'storeroom',
            title: '搜索案例成果信息',
            titleEn: 'storeroom',
            meta: { navIndex: 7, title: '成果库', titleEn: 'storeroom' },
            component: () => import('@/views/achievenmentChange/components/Storeroom.vue'),
            hidden: false
          },
          {
            path: '/achievenmentChange/detail',
            name: 'detail',
            title: '成果库详情',
            titleEn: 'detail',
            meta: { navIndex: 7, title: '成果库详情', titleEn: 'detail' },
            component: () => import('@/views/achievenmentChange/components/Detail.vue'),
            hidden: false
          }
        ]
      },

      {
        path: '/talentEvaluate',
        name: 'talentEvaluate',
        redirect: '/talentEvaluate/information',
        title: '人才评价',
        titleEn: 'Talent Evaluate',
        meta: { navIndex: 8, title: '人才评价', titleEn: 'Talent Evaluate' },
        component: () => import('@/views/talentEvaluate/Index.vue'),
        hidden: false,
        children: [
          {
            path: '/talentEvaluate/information',
            name: 'information',
            title: '工程技术人才评价信息',
            titleEn: 'information',
            meta: { navIndex: 8, title: '工程技术人才评价信息', titleEn: 'information' },
            component: () => import('@/views/talentEvaluate/components/Information.vue'),
            hidden: false
          },
          {
            path: '/talentEvaluate/register',
            name: 'register',
            title: '工程技术人才信息登记',
            titleEn: 'register',
            meta: { navIndex: 8, title: '工程技术人才信息登记', titleEn: 'register' },
            component: () => import('@/views/talentEvaluate/components/Register.vue'),
            hidden: false
          }
        ]
      },
      {
        path: '/greenProduce',
        name: 'greenProduce',
        redirect: '/greenProduce/Introduction',
        titleEn: 'Green Produce',
        title: '制造分会',
        meta: { navIndex: 9, title: '制造分会', titleEn: 'Green Produce' },
        component: () => import('@/views/greenProduce/Index.vue'),
        hidden: false,
        children: [
          {
            path: '/greenProduce/Introduction',
            name: 'introduction',
            title: '联盟简介',
            titleEn: 'introduction',
            meta: { navIndex: 9, title: '联盟简介', titleEn: 'introduction' },
            component: () => import('@/views/greenProduce/components/Introduction.vue'),
            hidden: false
          },
          {
            path: '/greenProduce/Active',
            name: 'Active',
            title: '最新动态',
            titleEn: 'active',
            meta: { navIndex: 9, title: '最新动态', titleEn: 'active' },
            component: () => import('@/views/greenProduce/components/Active.vue'),
            hidden: false
          },
          {
            path: '/greenProduce/regulation',
            name: 'regulation',
            title: '政策法规',
            titleEn: 'regulation',
            meta: { navIndex: 9, title: '政策法规', titleEn: 'regulation' },
            component: () => import('@/views/greenProduce/components/Regulation.vue'),
            hidden: false
          },
          {
            path: '/greenProduce/notice',
            name: 'notice',
            title: '通知公告',
            titleEn: 'notice',
            meta: { navIndex: 9, title: '通知公告', titleEn: 'notice' },
            component: () => import('@/views/greenProduce/components/Notice.vue'),
            hidden: false
          }
        ]
      },
      {
        path: '/connectUs',
        name: 'connectUs',
        title: '创新联盟',
        titleEn: 'Connect Us',
        meta: { navIndex: 10, title: '创新联盟', titleEn: 'Connect Us ' },
        component: () => import('@/views/connectUs/Index.vue'),
        hidden: false
      },

      {
        path: '/connectUs',
        name: 'connectUs',
        title: '联系我们',
        titleEn: 'Connect Us',
        meta: { navIndex: 11, title: '联系我们', titleEn: 'Connect Us ' },
        component: () => import('@/views/connectUs/Index.vue'),
        hidden: false
      }
    ]
  }
]

// export const asyncRouterMap = [];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
})
