import {
  Button,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  RadioGroup,
  RadioButton,
  Switch,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Tabs,
  TabPane
} from 'element-ui'
let AllComp = {
  Button,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  RadioGroup,
  RadioButton,
  Switch,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Tabs,
  TabPane
}

// 注册组件
export default {
  install(Vue) {
    Object.keys(AllComp).forEach(key => {
      Vue.component(AllComp[key].name, AllComp[key])
    })
  }
}
