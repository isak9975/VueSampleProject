<template>
    <Moc class="MainContainer" v-model:visible="showModal">
        <!-- 타이틀 -->
        <h2>{{ categoryId }}의 보드 페이지 입니다</h2>

        <button class="WriteButton" @click="write" >작성하기</button>

        <!-- 보여주기 페이지 -->
        <div class="DataContainer">
            <BoardComponent v-for="board in boardData" class="DataOne" :title='board.title' :key='board.id'
                :content="board.content" :img="board.img" :likes="board.likes" :comments="board.comments" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import BoardComponent from '../components/BoardComponent.vue';
import { cats } from '../components/img.ts'

const route = useRoute();
const categoryId = ref(route.params.categoryId);
watch(() => route.params.categoryId, (newID) => { categoryId.value = newID })

const showModal = ref(false);

const boardData = [
    {
        id: 1,
        img: cats[0].source,
        title: "귀여운 고양이",
        content: "이 고양이는 낮잠을 정말 좋아해요.",
        likes: 12,
        comments: [
            { user: "홍길동", text: "정말 귀엽네요!" },
            { user: "김철수", text: "저희 집 고양이랑 비슷해요." }
        ]
    },
    {
        id: 2,
        img: cats[1].source,
        title: "창밖을 바라보는 고양이",
        content: "세상 구경하는 걸 좋아하는 고양이랍니다.",
        likes: 8,
        comments: [
            { user: "이영희", text: "멍하니 바라보는 모습이 힐링돼요." },
            { user: "박민수", text: "정말 예쁘다!" }
        ]
    }, {
        id: 3,
        img: cats[2].source,
        title: '창밖 구경하는 고양이',
        content: '햇살이 따뜻한 날, 창문가에서 바깥을 구경하는 고양이의 모습이에요.',
        likes: '42',
        comments: [
            { user: 'catlover', text: '너무 평화롭네요!' },
            { user: 'windowview', text: '저런 고양이 키우고 싶어요!' }
        ]
    }
];

</script>

<style lang="css" scoped>
.MainContainer {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    height: 85vh;
    border: 1px solid black;
    border-radius: 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.WriteButton {}

.DataContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
}

.DataOne {
    flex: 0 0 calc(33.333% - 20px);
    display: flex;
}
</style>