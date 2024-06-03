import { EmployeesView  } from '@/constants/center'
import { ROUTE_PATHS, ROUTE_NAMES, DEFAULT_TRANSITION } from '../constants'

export const employeesRoute = {
  path: ROUTE_PATHS.EMPLOYEES,
  name: ROUTE_NAMES.EMPLOYEES,
  meta: {
    transition: { ...DEFAULT_TRANSITION }
  },
  component: EmployeesView,
}

