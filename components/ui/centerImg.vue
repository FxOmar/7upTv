<style scoped>
    .imgContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        opacity: 0;
    }
    .imgContainer img {
        width: 100%;
        max-width: none;
        max-height: none;
    }
    .imgContainer .innerBorder {
        border: 1px solid #00000011
    }
</style>

<template>
    <div class="imgContainer relative">
        <div 
            :class="[
                (innerBorder ? 'innerBorder' : ''), 
                'absolute inset-0 pointer-events-none'
            ]"
            style="border-radius: inherit"
        >
        </div>
        <slot />
    </div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill'

export default {
    props: {
        mode: {
            type: String,
            default: 'outside'
        },
        square: {
            type: Boolean,
            default: false
        },
        innerBorder: {
            type: Boolean,
            default: false
        },
        ratio: {
            type: String,
            default: '1:1',
        }
    },
    computed: {
        img () {
            return this.$el.querySelector('img')
        },
        imgSrc () {
            return this.img.getAttribute('src')
        }
    },
    methods: {
        adjust () {
            this.ratioImgContainer()
            var w = this.img.clientWidth
            var h = this.img.clientHeight
            var d = w / h
            var cw = this.$el.clientWidth
            var ch = this.$el.clientHeight
            var cd = cw / ch
            if (this.mode === 'outside') {
                if (cd > d) {
                    this.img.style.width = '100%'
                    this.img.style.height = 'auto'
                } else if (cd < d) {
                    this.img.style.width = 'auto'
                    this.img.style.height = '100%'
                }
            } else if (this.mode === 'inside') {
                if (cd > d) {
                    this.img.style.width = 'auto'
                    this.img.style.height = '100%'
                } else if (cd < d) {
                    this.img.style.width = '100%'
                    this.img.style.height = 'auto'
                }
            }
            this.$el.style.opacity = 1
        },
        ratioImgContainer () {
            let [ a, b ] = this.ratio.split(':')
            a = parseInt(a)
            b = parseInt(b)
            this.$el.style.height = (this.$el.clientWidth * b / a) + 'px'
        }
    },
    mounted () {
        this.img.onload = () => {
            this.adjust()
        }
        new ResizeObserver(() => {
            this.adjust()
        }).observe(this.$el)
    },
    updated () {
        this.adjust()
    }
}
</script>