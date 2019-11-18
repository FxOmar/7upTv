<template>
  <div class="border-l-4 border-red-600 bg-red-400 py-4 px-3 text-white">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['message']
}
</script>