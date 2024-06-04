import { EmployersView } from '@/constants/components/center'
import { PATHS, NAMES, DEFAULT_TRANSITION } from '@/constants/routes/index'

export const employersRoute = {
  path: PATHS.EMPLOYERS,
  name: NAMES.EMPLOYERS,
  meta: {
    transition: { ...DEFAULT_TRANSITION }
  },
  component: EmployersView,
}

