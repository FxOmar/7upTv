<template>
<div class="container mx-auto py-8">
    <div class="flex justify-center items-center">
    	<form class="w-full max-w-lg">
    		<div class="flex flex-wrap -mx-3 mb-6">
    			<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    				<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    					for="grid-first-name">
    					First Name
    				</label>
    				<input
    					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    					id="grid-first-name" type="text" placeholder="Jane">
    				<p class="text-red-500 text-xs italic">Please fill out this field.</p>
    			</div>
    			<div class="w-full md:w-1/2 px-3">
    				<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    					for="grid-last-name">
    					Last Name
    				</label>
    				<input
    					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    					id="grid-last-name" type="text" placeholder="Doe">
    			</div>
    		</div>
    		<div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 py-2">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Email
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password" type="email" placeholder="Jane.doe123@email.com">
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    				<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    					for="grid-password">
    					Password
    				</label>
    				<input
    					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    					id="grid-first-name" type="password" placeholder="**********">
    				<p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    			</div>
    			<div class="w-full md:w-1/2 px-3">
    				<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    					for="grid-password">
    					Confirm Password
    				</label>
    				<input
    					class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    					id="grid-last-name" type="password" placeholder="*********">
    			</div>
                
    		</div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="mx-3 mb-6 w-full">
                	<div class="md:w-1/3"></div>
                	<label class="md:w-2/3 block text-gray-500 font-bold">
                		<input class="mr-2 leading-tight" type="checkbox">
                		<span class="text-sm">
                			Send me your newsletter!
                		</span>
                	</label>
                </div>
                <div class="w-full px-3 py-3">
                    <app-button class="w-full font-bold"
                        color="blue">
                        {{ $t('New account') }}
                    </app-button>
                </div>
            </div>
    	</form>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>