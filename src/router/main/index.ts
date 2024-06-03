import { MainView } from '@/constants/center'
import { ROUTE_PATHS, ROUTE_NAMES, DEFAULT_TRANSITION } from '../constants'

export const mainRoute = {
  path: ROUTE_PATHS.MAIN,
  name: ROUTE_NAMES.MAIN,
  meta: {
    transition: { ...DEFAULT_TRANSITION },
  },
  component: MainView,
}

