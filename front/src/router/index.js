import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
        path: "/",
        redirect: "/home"
    }, {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/cadastro/aluno',
        name: 'Cadastro Aluno',
        component: () =>
            import ('@/views/cadastros/cadastroAluno.vue')
    },
    {
        path: '/cadastro/docente',
        name: 'Cadastro Docente',
        component: () =>
            import ('@/views/cadastros/cadastroDocente.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router