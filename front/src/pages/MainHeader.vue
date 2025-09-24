<template>
    <nav class="MainContainer">
        <router-link class="RouteLink" v-for="link in links" :key="link.path" :to="link.path">{{ link.name
            }}</router-link>
    </nav>

</template>

<script>


export default {
    name: 'MainHeader',
    props: {}, //상위 컴포넌트에서 매개변수 전달받기.
    methods:{}, //함수를 작성하면 templete에서 호출 가능
    computed:{}, //의존 데이터가 바뀔 땜나 다시 계산됨.
    watch:{}, //특정 data나 props가 변할 때 실행할 로직 넣을 수 있음(useEffect?)
    components:{}, // 하위 컴포넌트 등록
    emits:{}, //부모로 이벤트 전달
    mixins:{}, //여러 컴포넌트에서 공통 로직 공유
    data() {
        return {
            links: [
                {
                    path: "/",
                    name: "Home"
                }, {
                    path: "1",
                    name: "user"
                }
            ]
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
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px;
    font-size: 24px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    gap : 20px;
}

.RouteLink {
    color: black;
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px;
}
</style>