import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import CategoryView from '../views/CategoryView.vue'
import StudentView from '../views/StudentView.vue'
import EventDetailView from '../views/event/EventDetailView.vue' // Correct import
import EventEditView from '../views/event/EventEditView.vue' // Correct import
import EventRegisterView from '../views/event/EventRegisterView.vue' // Correct import

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
    },
    {
      path: '/event/:id/edit',
      name: 'event-edit',
      props: true,
      component: EventEditView
    },
    {
      path: '/event/:id/register',
      name: 'event-register',
      props: true,
      component: EventRegisterView
    }
  ]
})

export default router
