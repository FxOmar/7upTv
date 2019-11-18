<template>
	<div class="container mx-auto px-3 py-5">
		<div class="flex justify-center">
			<div class="lg:w-1/3 w-full">
				<div class="shadow rounded bg-white mt-4">
					<div class="px-5 py-3 border-b">
						<div class="text-xl font-bold text-gray-500">
							{{ $t('Register') }}
						</div>
					</div>
					<div class="p-5">
						<form  method="post" @submit.prevent="register">
							<div class="-mx-3 mb-6">
								<app-text-input class="mb-3">
									<input name="name" v-model="name" :placeholder="$t('Username')" type="text" required>
									<div v-if="error.name" slot="helper">{{ error.name[0] }}</div>
								</app-text-input>
							</div>
							<div class="-mx-3 mb-6">
								<app-text-input class="mb-3">
									<input name="email" v-model="email" :placeholder="$t('Email')" type="text" required>
									<div v-if="error.email" slot="helper">{{ error.email[0] }}</div>
								</app-text-input>
							</div>
							<div class="-mx-3 mb-6">
								<app-text-input class="mb-3">
									<input name="password" v-model="password" :placeholder="$t('password')" type="password" required>
									<div v-if="error.password" slot="helper">{{ error.password[0] }}</div>
								</app-text-input>
								<app-text-input class="mb-3">
									<input name="password_confirmation" v-model="password_confirmation" :placeholder="$t('Confirm password')" type="password" required>
									<div v-if="password != password_confirmation" slot="helper">password is not the same as above!</div>
								</app-text-input>
							</div>
							<div class="-mx-3 mb-6">
								<div class="pb-3">
									<label class="md:w-2/3 block text-gray-500 font-bold">
										<input class="mr-2 leading-tight" type="checkbox">
										<span class="text-sm">
											Send me your newsletter!
										</span>
									</label>
								</div>
								<app-button class="w-full font-bold" color="blue">
									{{ $t('New account') }}
								</app-button>
							</div>
						</form>
						<div class="has-text-centered" style="margin-top: 20px">
							Already got an account? <nuxt-link to="/login">Login</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  middleware:['guest'],
  components: {
  },

  data() {
    return {
      name: '',
      email: '',
	  password: '',
	  password_confirmation: '',
	  error: {}
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('/users/register', {
          name: this.name,
          email: this.email,
		  password: this.password,
		  password_confirmation: this.password
        })

        this.$router.push('/login')
      } catch (e) {
		this.error = e.response.data.errors
      }
    }
  }
}
</script>

<style>
.input{
	@apply border
}
</style>