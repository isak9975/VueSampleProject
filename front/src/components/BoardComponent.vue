<template>
    <div class="MainContainers">
        <!-- 사진 -->
        <div class="TopContainer">
            <img :src="img" />
        </div>

        <!-- 글 정보 -->
        <div class="MiddleContainer">
            <div class="TopContainer">
                <span>제목 : {{ title }}</span>
                <span>내용 : {{ content }}</span>
            </div>

            <!-- 글 상태 -->
            <div class="BottomContainer">
                <span>좋아요 :{{ likes || 0 }}</span>
                <span>댓글수 :{{ comments?.length || 0 }}</span>
            </div>
        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    img: String,
    title: String,
    content: String,
    likes: Number,
    comments: {
        type: Array,
        default: () => [] //기본값 빈 배열
    }

})
</script>


<style lang="css" scoped>
.MainContainers {
    display: flex;
    width: 100%;
    flex-direction: column;
    border: 1px solid black;
}

.TopContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.TopContainer img {
    background-color: antiquewhite;
    object-fit: cover;
    object-position: center;
    height: 300px;
    width: 100%;
}

.MiddleContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.BottomContainer {
    gap: 20px;
}
</style>