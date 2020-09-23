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
  Switch,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Tabs,
  TabPane,
  Radio,
  Dropdown,
  DropdownMenu,
  DropdownItem
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
  Switch,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Tabs,
  TabPane,
  Radio,
  Dropdown,
  DropdownMenu,
  DropdownItem
}

// 注册组件
export default {
  install(Vue) {
    Object.keys(AllComp).forEach(key => {
      Vue.component(AllComp[key].name, AllComp[key])
    })
  }
}
