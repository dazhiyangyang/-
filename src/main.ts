import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Pagination,
  Table,
  Tabs,
  TabPane,
  Form,
  Dialog,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  FormItem,
  Button,
  Input,
  Select,
  Option,
  RadioGroup,
  RadioButton,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Collapse,
  CollapseItem,
  Icon,
  Carousel,
  CarouselItem
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'

Vue.config.productionTip = false
Vue.use(Pagination)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(Select)
Vue.use(Option)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Icon)
Vue.use(Carousel)
Vue.use(CarouselItem)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
