<template>
  <div>
    <el-breadcrumb>
      <el-breadcrumb-item
        v-for="route in breadcrumbData"
        :key="route.name"
        :to="{ path: route.path }"
      >
        {{ route.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'FruitBreadcrumb',
  computed: {
    breadcrumbData: vm => vm.handleOfBreadcrumb(vm.$route.matched || [])
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
                path,
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
