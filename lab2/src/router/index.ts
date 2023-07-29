import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import CategoryView from '../views/CategoryView.vue'
import StudentView from '../views/StudentView.vue'
import EventDetailView from '../views/EventDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list', // event-list
      component: EventListView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoryView
    },
    { path: '/students', name: 'students', component: StudentView },
    {
      path: '/event/:id',
      name: 'event-detail',
      component: EventDetailView,
      props: true
    }
  ]
})

export default router
