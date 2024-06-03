import ProfileView from '@/views/profile-view.vue'
import { ROUTE_PATHS, ROUTE_NAMES, DEFAULT_TRANSITION } from '../constants'

export const profileRoute = {
  path: ROUTE_PATHS.PROFILE,
  name: ROUTE_NAMES.PROFILE,
  meta: {
    transition: { ...DEFAULT_TRANSITION }
  },
  component: ProfileView,
}

