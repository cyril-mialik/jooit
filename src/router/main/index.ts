import MainView from '@/views/main-view.vue'
import { ROUTE_PATHS, ROUTE_NAMES } from '../constants'

export const mainRoute = {
  path: ROUTE_PATHS.MAIN,
  name: ROUTE_NAMES.MAIN,
  meta: {
    transition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
  component: MainView,
}

