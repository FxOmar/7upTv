export default ({ store, redirect }) => {
    if (!store.state.Auth.user)
        redirect('/login')
}