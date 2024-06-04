import { EmployeesView  } from '@/constants/components/center'
import { PATHS, NAMES, DEFAULT_TRANSITION } from '@/constants/routes/index'

export const employeesRoute = {
  path: PATHS.EMPLOYEES,
  name: NAMES.EMPLOYEES,
  meta: {
    transition: { ...DEFAULT_TRANSITION }
  },
  component: EmployeesView,
}

