import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../pages/inicio.vue'
import Nosotros from '../pages/Nosotros.vue'
import NormasConvivencia from '../pages/NormasConvivencia.vue'
import Niveles from '../pages/Niveles.vue'
import Noticias from '../pages/Noticias.vue'


const routes = [
  { path: '/', name: 'inicio', component: Inicio },
  { path: '/nosotros', name: 'Nosotros', component: Nosotros },
  { path: '/normasConvivencia', name: 'NormasConvivencia', component: NormasConvivencia},
  { path: '/niveles', name:'Niveles', component: Niveles},
  { path: '/noticias', name:'Noticias', component: Noticias}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
