<template>
    <div
        :class="{
            'opacity-0 pointer-events-none': !visible
        }"
        class="z-10"
        v-on-clickaway="away" 
    >
        <slot 
            :hide="hide" 
        />
    </div>
</template>

<script>
import Popper from 'popper.js'
import { directive as onClickaway } from 'vue-clickaway'

export default {
    directives: { onClickaway },
    props: { options: Object, default: () => ({}) },
    data() {
        return {
            instance: null,
            visible: false, 
            reference: null
        }
    },
    mounted() {
        this.init()
        this.reference.addEventListener('click', () => {
            this.toggle()
        })
    },
    methods: {
        init() {
            this.reference = this.$el.previousElementSibling
            this.instance = new Popper(this.reference, this.$el, {
                placement: "bottom-end",
                positionFixed: true,
                ... this.options
            })
        },
        show() {
            this.visible = true
        },
        hide() {
            this.visible = false
        },
        toggle() {
            this.visible = !this.visible
        },
        away(e) {
            if (this.reference !== e.target && !this.reference.contains(e.target)) {
                this.hide()
            }
        }
    },
    watch: {
        '$i18n.locale' (val, oldVal) {
            this.init()
        }
    }
}
</script>

<style>

</style>
