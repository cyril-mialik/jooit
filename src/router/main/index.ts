import { MainView } from '@/constants/components/center'
import { PATHS, NAMES, DEFAULT_TRANSITION } from '@/constants/routes/index'

export const mainRoute = {
  path: PATHS.MAIN,
  name: NAMES.MAIN,
  meta: {
    transition: { ...DEFAULT_TRANSITION },
  },
  component: MainView,
}

