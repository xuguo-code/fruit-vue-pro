import store from '../store'
import { hasRoles } from '../router/handleOfRouter'

export default {
  name: 'permission',
  inserted(el, { value }) {
    let permission = Array.isArray(value) ? value : [value]
    const roles = store.getters['user/roles']
    if (!hasRoles(permission, roles)) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
}
