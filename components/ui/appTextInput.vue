<template>
    <label 
        class="app-text-input block"
        :class="[`size-${size}`]"
    >
        <div
            class="text-gray-700" 
            :class="[ ... labelClass ]"
        >
            <slot name="label" />
        </div>
        <div 
            class="flex-grow flex rounded bg-white border-2" 
            :class="[{ 'rounded-full': rounded }, ... containerClass ]"
        >
            <div class="flex">
                <slot name="start" />
            </div>
            <div class="flex-grow">
                <slot />
            </div>
            <div class="flex">
                <slot name="end" />
            </div>
        </div>
        <div 
            class="text-xs text-gray-400"
            :class="[ ... helperClass ]"
        >
            <slot name="helper" />
        </div>
    </label>
</template>

<script>
export default {
    props: {
        color: { type: String, default: 'default' },
        size: { type: String, default: 'm' },
        type: { type: String, default: 'default' },
        rounded: { type: Boolean, default: false },
        active: { type: Boolean, default: false },
    },
    data() {
        return {
            focus: false,
        }
    },
    computed: {
        containerClass() {
            let value = []
            if (this.focus || this.active) {
                value.push(`border-${this.color}-500 hover:border-${this.color}-500`)
            } else {
                value.push(`hover:border-${this.color}-300`)
            }
            return value
        },
        labelClass() {
            let value = []
            if (this.active) {
                value.push(`text-${this.color}-500`)
            }
            return value
        },
        helperClass() {
            let value = []
            if (this.active) {
                value.push(`text-${this.color}-600`)
            }
            return value
        },
    },
    mounted() {
        this.$el.querySelector('input,select').addEventListener('focus', () => {
            this.focus = true
        })
        this.$el.querySelector('input,select').addEventListener('blur', () => {
            this.focus = false 
        })
    }
}
</script>

<style lang="postcss">
.app-text-input select,
.app-text-input input {
    @apply w-full bg-transparent;
}
/* sizes */
.app-text-input.size-xs select,
.app-text-input.size-xs input {
    @apply px-2 py-1;
}
.app-text-input.size-s select,
.app-text-input.size-s input {
    @apply px-3 py-1;
}
.app-text-input.size-m select,
.app-text-input.size-m input {
    @apply px-3 py-1;
}
.app-text-input.size-l select,
.app-text-input.size-l input {
    @apply px-3 py-1;
}
.app-text-input.size-xl select,
.app-text-input.size-xl input {
    @apply px-4 py-2;
}
/*****/
.app-text-input.size-xs {
    @apply text-xs;
}
.app-text-input.size-s {
    @apply text-sm;
}
.app-text-input.size-m {
    /**/
}
.app-text-input.size-l {
    @apply text-lg;
}
.app-text-input.size-xl {
    @apply text-xl;
}
</style>