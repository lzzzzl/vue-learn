import { createRouter, createWebHistory } from 'vue-router'
import DetailsView from '../views/DetailsView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: DetailsView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
