import type { Menu } from '@/types/menu'
import { ROUTE_PATHS } from '@/router/constants'

export const MENU: Menu[] = [
  {
    name: 'Employers',
    url: ROUTE_PATHS.EMPLOYERS,
  },
  {
    name: 'Employees',
    url: ROUTE_PATHS.EMPLOYEES,
  },
  {
    name: 'Profile',
    url: ROUTE_PATHS.PROFILE,
  },
]

