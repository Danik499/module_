import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/Main"
import AddGame from "@/views/AddGame"

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/add',
    name: 'AddGame',
    component: AddGame
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
