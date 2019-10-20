<template>
    <button 
        class="fill-current"
        :class="calculatedClass"
        :disabled="loading"
        :type="nativeType"
        v-on="$listeners"
    >
        <span class="flex justify-center items-center">
            <slot />
            <loader v-if="loading" class="ltr:ml-2 rtl:mr-2" width="18" height="18" />
        </span>
    </button>
</template>

<script>
export default {
    props: {
        nativeType: { type: String, default: 'submit' },
        color: { type: String, default: 'gray' },
        size: { type: String, default: 'm' },
        type: { type: String, default: 'default' },
        rounded: { type: Boolean, default: false },
        loading: { type: Boolean, default: false },
    },
    computed: {
        calculatedClass() {
            let value = []
            // rounded
            if (this.rounded) value.push('rounded-full')
            else value.push('rounded')
            // size
            switch (this.size) {
                case 'xs': value.push('px-2 py-1 text-xs'); break 
                case 's': value.push('px-3 py-1 text-sm'); break 
                case 'm': value.push('px-4 py-1'); break 
                case 'l': value.push('px-4 py-1 text-lg'); break 
                case 'xl': value.push('px-5 py-2 text-xl'); break 
            }
            // color-type
            switch (this.type) {
                case 'default':     value.push(`bg-${this.color}-500 text-white border border-${this.color}-600 hover:bg-${this.color}-600`); break
                case 'invisible':   value.push(`border border-transparent bg-transparent text-${this.color}-800 hover:bg-${this.color}-200`); break
                case 'outline':     value.push(`bg-white text-${this.color}-600 border border-${this.color}-600 hover:bg-${this.color}-500 hover:text-white`); break
            }
            return value
        }
    }
}
</script>

<style>

</style>