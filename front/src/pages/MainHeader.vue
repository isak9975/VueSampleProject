<template>
    <nav class="MainContainer">
        <router-link class="RouteLink"
            v-for="link in links" 
                :key="link.path"
                :to="link.path">{{link.name}}</router-link>
    </nav>

</template>

<script>

const links  = [
    {
        path : "/",
        name : "Home"
    }
]

export default {
    name: 'MainHeader',
    props: {},
    data() {
        return {};
    }
}

</script>


<style scoped>
a {
    text-decoration: none;
}

.MainContainer {
    border: 1px solid black;
    border-radius: 8px;
    padding: 20px;
    font-size: 24px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    gap : 20px;
}

.RouteLink{
    color: black;
    border: 1px solid black;
    border-radius: 8px;
    padding : 10px;
}

</style>