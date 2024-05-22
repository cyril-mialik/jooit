import EmployersView from '@/views/employers-view.vue'
import { ROUTE_PATHS, ROUTE_NAMES } from '../constants'

export const employersRoute = {
  path: ROUTE_PATHS.EMPLOYERS,
  name: ROUTE_NAMES.EMPLOYERS,
  meta: {
    transition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
  component: EmployersView,
}

