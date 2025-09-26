<template>
    <div v-if="visible">
        <span>보드 업데이트 페이지</span>

        <!-- 버튼들 -->
        <div>
            <button @click="save">완료</button>    
            <button @click="close">닫기</button>
        </div>

        <div class="MainContainers">
        <!-- 사진 -->
        <div class="TopContainer">
            <img :src="img||''" />
        </div>

        <!-- 글 정보 -->
        <div class="MiddleContainer">
            <div class="TopContainer">
                <input v>제목 : {{ title }}</input>
                <input>내용 : {{ content }}</input>
            </div>
        </div>
    </div>
        
    </div>
</template>

<script setup>
    const emit = defineEmits(['update:visible']);
    const props = defineProps(['update:visible']);

    //저장하기 
    function save() {
        //저장 및 업데이트 로직 들어올곳.
    }

    //닫기
    function close(){
        emit('update:visible',false)//부모에게 visible 값을 false로 바꾸라고 알림
    }

</script>

<style lang="css">
</style>
