import { ProfileView } from '@/constants/components/center'
import { PATHS, NAMES, DEFAULT_TRANSITION } from '@/constants/routes/index'

export const profileRoute = {
  path: PATHS.PROFILE,
  name: NAMES.PROFILE,
  meta: {
    transition: { ...DEFAULT_TRANSITION }
  },
  component: ProfileView,
}

