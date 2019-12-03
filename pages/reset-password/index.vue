<template>
	<div class="container mx-auto px-3 py-5">
		<div class="flex justify-center">
			<div class="lg:w-1/3 w-full">
				<div class="shadow rounded bg-white">
					<div class="px-5 py-3 border-b">
						<div class="text-xl font-bold text-gray-500">
							{{ $t('Reset Password') }}
						</div>
					</div>
					<div class="p-5">
						<form method="post" @submit.prevent="">
							<app-text-input class="mb-3">
								<input v-model="email" :placeholder="$t('user@example.com')" type="text">
								<!-- <div v-if="errors.email" slot="helper">{{ errors.email[0] }}</div> -->
							</app-text-input>
							<div class="mb-3">
								<app-button class="w-full font-bold" color="blue">
									{{ $t('Send Password Reset Link') }}
								</app-button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data() {
      return {
        email: null,
        has_error: false
      }
    },
}
</script>