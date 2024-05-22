import { createRouter, createWebHistory } from 'vue-router'

import { mainRoute } from './main'
import { employeesRoute } from './employees'
import { employersRoute } from './employers'
import { profileRoute } from './profile'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    mainRoute,
    employeesRoute,
    employersRoute,
    profileRoute,
  ]
})

export default router

