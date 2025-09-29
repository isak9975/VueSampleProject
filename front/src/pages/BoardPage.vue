<template>
    <div class="MainContainer">
        <!-- 타이틀 -->
        <h2>{{ categoryId }}의 보드 페이지 입니다</h2>

        <button class="WriteButton" @click="write" >작성하기</button>

        <!-- 보여주기 페이지 -->
        <div class="DataContainer">
            <BoardComponent v-for="board in boardData" class="DataOne" :title='board.title' :key='board.id'
                :content="board.content" :img="board.img" :likes="board.likes" :comments="board.comments" />
        </div>

        <Modal v-model:visible="showModal">
            <!-- 모달로 전달할 내용들 -->
            <div class="showModal">
                제목 : <input v-model="formData.title"/>
                내용 : <textarea v-model="formData.content"></textarea>
                이미지:<img class="modal-img" v-bind:src="formData.img?formData.img:cats[1].source" alt="예시이미지"/>
            </div>
            <button @click="save">작성완료</button>
        </Modal>
    </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import BoardComponent from '../components/BoardComponent.vue';
import { cats } from '../components/img.ts'
import Modal from '../components/Modal.vue';

const route = useRoute();
const categoryId = ref(route.params.categoryId);
watch(() => route.params.categoryId, (newID) => { categoryId.value = newID })

const showModal = ref(false);
// 모달창 열기
function write(){
    showModal.value = !showModal.value;
}
// [post]작성하기
async function save(){
    console.log(formData)
    await alert("작성이 완료되었습니다.")
    showModal.value = !showModal.value;
}
const formData = reactive({
    title : "",
    content : "",
    img : "",
})

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

.showModal{
    display: flex;
    flex-direction: column;
}

.modal-img{
    
}
</style>