<template>
    <div>
        <div class="container mx-auto mb-3">
            <div class="select-none">
                <div class="header">
                    <h1>Genres & Subgenres</h1>
                    <span class=" cursor-pointer" @click="isActive = ! isActive"><i class="fas fa-arrow-down"></i></span>
                </div>
                <div :class="[isActive ? 'hidden' : '']" class="w-full py-3 px-3 bg-gray-400 ">
                    <input class="w-full border p-2" type="text" placeholder="Type something here..">
                    <div class="border-t mt-4">
                        <ul class="overflow-auto h-32 px-4 py-3">
                            <li>
                                <input type="checkbox" name="genre" id="genreid:D+++646" value="Action" data-filter-id="genreid:D+++646">
                                <label for="genreid:D+++646">Action</label>
                            </li>
                             <li>
                                <input type="checkbox" name="genre" id="genreid:D+++646" value="Action" data-filter-id="genreid:D+++646">
                                <label for="genreid:D+++646">Action</label>
                            </li>
                             <li>
                                <input type="checkbox" name="genre" id="genreid:D+++646" value="Action" data-filter-id="genreid:D+++646">
                                <label for="genreid:D+++646">Action</label>
                            </li>
                             <li>
                                <input type="checkbox" name="genre" id="genreid:D+++646" value="Action" data-filter-id="genreid:D+++646">
                                <label for="genreid:D+++646">Action</label>
                            </li>
                             <li>
                                <input type="checkbox" name="genre" id="genreid:D+++646" value="Action" data-filter-id="genreid:D+++646">
                                <label for="genreid:D+++646">Action</label>
                            </li>
                             <li>
                                <input type="checkbox" name="genre" id="genreid:D+++646" value="Action" data-filter-id="genreid:D+++646">
                                <label for="genreid:D+++646">Action</label>
                            </li>
                             <li>
                                <input type="checkbox" name="genre" id="genreid:D+++646" value="Action" data-filter-id="genreid:D+++646">
                                <label for="genreid:D+++646">Action</label>
                            </li>
                             <li>
                                <input type="checkbox" name="genre" id="genreid:D+++646" value="Action" data-filter-id="genreid:D+++646">
                                <label for="genreid:D+++646">Action</label>
                            </li>
                             <li>
                                <input type="checkbox" name="genre" id="genreid:D+++646" value="Action" data-filter-id="genreid:D+++646">
                                <label for="genreid:D+++646">Action</label>
                            </li>
                             <li>
                                <input type="checkbox" name="genre" id="genreid:D+++646" value="Action" data-filter-id="genreid:D+++646">
                                <label for="genreid:D+++646">Action</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            isActive: false,
        }
    },
}
</script>

<style scoped>
.header{
    @apply bg-blue-600 py-4 px-3 text-white w-full flex justify-between
}
</style>