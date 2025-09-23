import {createRouter,createWebHashHistory} from 'vue-router'
import MaingPage from '../pages/MaingPage.vue'

//라우트 정의
const  routes = [
    {
        path:'/',
        name:'home',
        component : MaingPage
    },

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to,from, saveedPosition){
        if(saveedPosition)return saveedPosition
        return {top:0}
    }
})