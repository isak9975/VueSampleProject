<template>
    <nav class="MainContainer">
        <!-- 주메뉴 -->
        <div class="left">
            <router-link class="RouteLink" v-for="link in links" :key="link.path" @click="handleHover(link)"
                :to="link.name === 'Board' ? '' : link.path">{{ link.name }}</router-link>

            <!-- 서브메뉴 -->
            <nav class="SubContainer" v-if="activeSubMenu === 'Board'">
                <router-link class="RouteLink" v-for="link in boards" :key="link.path" @click="handleHover(link)"
                    :to="link.path">{{ link.name }}</router-link>
            </nav>

        </div>

        <!-- 인증관련 -->
        <div class="right">
            <router-link class="RouteLink right" v-for="link in authLinks" :key="link.path" :to="link.path">{{ link.name
                }}</router-link>
        </div>
    </nav>



</template>

<script>
import { authLinks, links } from '../router';



//Options API (Vue2.js)
export default {
    name: 'MainHeader',
    props: {}, //상위 컴포넌트에서 매개변수 전달받기.
    methods: {
        handleHover(link) {
            if (link.name === 'Board' && this.activeSubMenu === null) {
                this.activeSubMenu = 'Board'
            } else {
                this.activeSubMenu = null
            }
        }
    }, //함수를 작성하면 templete에서 호출 가능
    computed: {}, //의존 데이터가 바뀔 땜나 다시 계산됨.
    watch: {}, //특정 data나 props가 변할 때 실행할 로직 넣을 수 있음(useEffect?)
    components: {}, // 하위 컴포넌트 등록
    emits: {}, //부모로 이벤트 전달
    data() {
        return {
            activeSubMenu: null,
            boards: [{
                path: '/board/1',
                name: '게시판1'
            }, {
                path: '/board/2',
                name: '게시판2'
            }, {
                path: '/board/3',
                name: '게시판3'
            }, {
                path: '/board/4',
                name: '게시판4'
            },

            ],
            links,
            authLinks
        }
    }
}


</script>


<style scoped>
a {
    text-decoration: none;
}

.MainContainer {
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.SubContainer {
    display: flex;
    margin-left: 30px;
    align-items: center;
    border-radius: 8px;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    gap: 20px;
}

.RouteLink {
    color: black;
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px;
}

.left,
.right {
    display: flex;
    gap: 20px
}
</style>