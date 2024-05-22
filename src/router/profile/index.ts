import ProfileView from '@/views/profile-view.vue'
import { ROUTE_PATHS, ROUTE_NAMES } from '../constants'

export const profileRoute = {
  path: ROUTE_PATHS.PROFILE,
  name: ROUTE_NAMES.PROFILE,
  meta: {
    transition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
  component: ProfileView,
}

