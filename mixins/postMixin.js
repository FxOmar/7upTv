export default {
    data() {
        return {
            postEditMode: false,
            editPostBody: '',
            editPostLoading: false
        }
    },
    computed: {
        authLikes() {
            return !!this.post.likers.find(l => l.id === (this.$auth() || {}).id)
        },
        isPostBodyValid() {
            return this.editPostBody.trim().length > 3
        }
    },
    methods: {
        async like() {
            if (this.$auth()) {
                this.$axios.$post('/like', { resource: 'post', resource_id: this.post.id })
                if (!this.authLikes) {
                    this.post.likers.push(this.$auth())
                    this.post.total_likes ++
                } else {
                    let index = this.post.likers.findIndex(l => l.id === this.$auth().id)
                    this.post.likers.splice(index, 1)
                    this.post.total_likes --
                }
            } else {
                this.$router.push(this.localePath('login'))
            }
        },
        setPostEditMode(val) {
            if (val) this.editPostBody = this.post.body
            this.postEditMode = val
        },
        async editPost() {
            if (this.isPostBodyValid) {
                this.editPostLoading = true
                await this.$axios.$put(`/posts/${this.post.id}`, { body: this.editPostBody })
                this.post.body = this.editPostBody
                this.editPostBody = ''
                this.postEditMode = false
                this.editPostLoading = false
            }
        }
    }
}