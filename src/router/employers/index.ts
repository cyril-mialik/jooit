import { EmployersView } from '@/constants/center'
import { ROUTE_PATHS, ROUTE_NAMES, DEFAULT_TRANSITION } from '../constants'

export const employersRoute = {
  path: ROUTE_PATHS.EMPLOYERS,
  name: ROUTE_NAMES.EMPLOYERS,
  meta: {
    transition: { ...DEFAULT_TRANSITION }
  },
  component: EmployersView,
}

