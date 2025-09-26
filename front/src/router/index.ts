import {createRouter,createWebHashHistory, createWebHistory} from 'vue-router'
import MaingPage from '../pages/MaingPage.vue'
import BoardPage from '../pages/BoardPage.vue'
import LoginPage from '../pages/LoginPage.vue'

//라우트 정의
const  routes = [
    {
        path:'/',
        name:'Home',
        component : MaingPage
    },{
        path:'/board/:categoryId',
        name:'Board',
        component:BoardPage
    },{
        path:'/auth/login',
        name:'Login',
        component : LoginPage
    },
]

export const links = routes.filter(route=>!route.path.startsWith("/auth")).map(route=>{return {path:route.path,name:route.name}})
export const authLinks = routes.filter(route=>route.path.startsWith("/auth")).map(route=>{return {path:route.path,name:route.name}})

export const router = createRouter({ //라우터 인스턴스 생성
    history: createWebHistory(), //해시 없이 깔끔한 URL
    routes,                         // 경로 목록
    scrollBehavior(to,from, saveedPosition){ //페이지 이동 후 스크롤 위치를 제어하는 옵션
        if(saveedPosition)return saveedPosition //브라우저에서 이전 스크롤 위치를 저장한 경우(뒤로가기/앞으로가기)
        return {top:0}  //없다면 맨처음으로 이동. => 매 링크마다 window.scroll을 안해도 됨.
    }
})