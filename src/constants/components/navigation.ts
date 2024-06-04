import type { Navigation } from '@/types/menu'
import { PATHS as ROUTE_PATHS, NAMES as ROUTE_NAMES } from '@/constants/routes/index'

export const EMPLOYERS: Navigation = {
  name: ROUTE_NAMES.EMPLOYERS,
  url: ROUTE_PATHS.EMPLOYERS
}

export const EMPLOYEES: Navigation = {
  name: ROUTE_NAMES.EMPLOYEES,
  url: ROUTE_PATHS.EMPLOYEES
}

export const PROFILE: Navigation = {
  name: ROUTE_NAMES.PROFILE,
  url: ROUTE_PATHS.PROFILE
}

export const NAVIGATION: Navigation[] = [
  EMPLOYERS,
  EMPLOYEES,
  PROFILE
]

