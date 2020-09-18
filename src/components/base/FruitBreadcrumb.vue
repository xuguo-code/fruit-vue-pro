<template>
  <div>
    <el-breadcrumb>
      <template v-for="route in breadcrumbData">
        <el-breadcrumb-item
          v-if="route.path !== curPath"
          :key="route.title"
          :to="{ path: route.path }"
        >
          {{ route.title }}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-else :key="route.title">
          {{ route.title }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'FruitBreadcrumb',
  computed: {
    breadcrumbData: vm => vm.handleOfBreadcrumb(vm.$route.matched || []),
    curPath: vm => vm.$route.fullPath
  },
  methods: {
    handleOfBreadcrumb(matched) {
      return matched.reduce((memo, route) => {
        /**
         * {
         *  path
         *  title
         * }
         */
        if (!route?.meta?.skip && !route?.meta?.hideInBreadcrumb) {
          let title = route?.meta?.title || route.name
          let path = route?.redirect || route.path
          if (path && title) {
            return [
              ...memo,
              {
                path: path.startsWith('/') ? path : '/' + path,
                title
              }
            ]
          } else {
            return memo
          }
        } else {
          return memo
        }
      }, [])
    }
  }
}
</script>

<style lang="scss" scoped></style>
