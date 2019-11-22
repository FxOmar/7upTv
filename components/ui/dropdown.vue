<template>
  <div class="relative inline-block">
    <button ref="button" @click="toggle" class="toggle-button block lg:inline-block lg:mt-0 hover:text-blue-400 mr-4">
    {{ drop_name }} <i class="fas fa-chevron-down text-sm"></i>
    </button>
    <div v-show="showPopup" v-closable="{
            exclude: ['button'],
            handler: 'onClose'
        }" 
        class="popup-menu">
        <slot
            :onClose="onClose"
        />
    </div>
  </div>
</template>

<script>
export default {
    props:{
        drop_name:String,
    },
    data() {
        return {
            showPopup: false
        };
    },
    methods: {
        toggle() {
            this.showPopup = !this.showPopup;
        },
        onClose () {
            this.showPopup = false
        }
    }
}
</script>

<style scoped>
.popup-menu{
  @apply w-40 absolute bg-gray-400 shadow-md rounded py-3 z-30
}
.popup-box li{
    @apply px-4 py-1 text-sm antialiased font-bold select-none cursor-pointer
}
.popup-box li:hover{
  @apply bg-gray-200
}
</style>