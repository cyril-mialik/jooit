import type { Menu } from '@/types/menu'
import { ROUTE_PATHS, ROUTE_NAMES } from '@/router/constants'

export const EMPLOYERS: Menu = {
  name: ROUTE_NAMES.EMPLOYERS,
  url: ROUTE_PATHS.EMPLOYERS
}

export const EMPLOYEES: Menu = {
  name: ROUTE_NAMES.EMPLOYEES,
  url: ROUTE_PATHS.EMPLOYEES
}

export const PROFILE: Menu = {
  name: ROUTE_NAMES.PROFILE,
  url: ROUTE_PATHS.PROFILE
}

export const MENU: Menu[] = [
  EMPLOYERS,
  EMPLOYEES,
  PROFILE
]

