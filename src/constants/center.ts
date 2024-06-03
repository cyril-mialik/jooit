import { defineAsyncComponent } from 'vue'
import MainViewComponent from '@/views/main-view.vue'

export const MainView = MainViewComponent

export const EmployersView = defineAsyncComponent(() =>
  import('@/views/employers-view.vue')
)

export const EmployeesView = defineAsyncComponent(() =>
  import('@/views/employees-view.vue')
)

export const ProfileView = defineAsyncComponent(() =>
  import('@/views/profile-view.vue')
)

