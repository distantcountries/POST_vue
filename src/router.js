import Vue from 'vue'
import Router from 'vue-router'
import AppPosts from './components/AppPosts'
import SinglePost from './components/SinglePost'
import AddPost from './components/AddPost'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/posts'
        },
        {
            path: '/posts',
            name: 'posts',
            component: AppPosts
        },
        {
            path: '/posts/:id',
            name: 'single-post',
            component: SinglePost
        },
        {
            path: '/add',
            name: 'add-post',
            component: AddPost
        },
        {
            path: '/edit/:id',
            name: 'edit-post',
            component: AddPost
        },

    ]
})