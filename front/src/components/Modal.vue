<template>
    <!-- 부모에게 받은 props(visible)을 사용해 제어하기. -->
    <div v-if="visible" class="modal-overlay">

        <div class="modal-content">
            <div class="modal-content-header">
                <h2>{{title}}</h2>
                <button class="modal-close-button" @click="close">X</button>
            </div>
            <div class="modal-content-top">
                <slot> </slot>
            </div>
        </div>

    </div>
</template>



<script setup>
//부모->자식 호출될때 받을 값을 설정
const props = defineProps({
    title : {
        type:String,
        default: "모달창입니다"
    },
    visible: {
        type: Boolean,
        default: false
    }
})

//자식->부모 부모에게 이벤트를 전달하기 위해 사용.
//v-model을 사용할때 자식에서 해야하는 설정.
//update:이벤트명 
const emit = defineEmits(['update:visible'])

function close() {
    //update:visible => visible이란 이벤트에 false를 전달하겠다.
    emit('update:visible', false)
}

</script>



<style scoped>
.modal-overlay {
    position: fixed;
    /* 👈 부모 위치 무시하고 브라우저 전체 기준 */
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    /* 반투명 배경 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 10px;
    border-radius: 8px;
    width: 30vw;
    height: 70vh;
    z-index: 1000;

    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
}

.modal-content-header {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    background-color: blanchedalmond;
}

.modal-close-button{
    align-self: center;
    padding :10px 12px
}
</style>