import EmployeesView from '@/views/employees-view.vue'
import { ROUTE_PATHS, ROUTE_NAMES } from '../constants'

export const employeesRoute = {
  path: ROUTE_PATHS.EMPLOYEES,
  name: ROUTE_NAMES.EMPLOYEES,
  meta: {
    transition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
  component: EmployeesView,
}

