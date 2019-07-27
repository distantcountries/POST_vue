<template>
    <div>
        <ol>
            <li v-for="post in posts" :key="post.id">
                <h3>{{ post.title }}</h3>
                    {{ post.text}} 
                    <span>Posted at {{ post.createdAt | formatDate }}</span>
                    <router-link :to="singlePost(post.id)">View Post</router-link>
                    <button @click="editPost(post)">Edit post</button>
                    <button @click="deletePost(post.id)">Delete post</button>
                    <!-- {{ post.comments.length }}Comments -->
                <hr>
            </li>
        </ol>
    </div>
</template>

<script>
import { postsService } from './../services/PostsService'
import { DateMixins } from '../mixins'
export default {
    data() {
        return {
            posts:[],
        }
    }, 

    mixins:[DateMixins],

    // created() {
    //     postsService.getAll()
    //     .then(response => {
    //         this.posts = response.data
    //     })
    // }, 

    beforeRouteEnter (to, from, next) {
    postsService.getAll()
      .then((response) => {
        next((vm) => {
          vm.posts = response.data
        })
      })
    },

    methods: {
        singlePost(id) {
            return `posts/${id}`
        }, 

        editPost(post, id) {
            this.$router.push({name:'edit-post', params:{id:post.id}})
        }, 

        deletePost(id) {
            postsService.delete(id) 
            .then(response => {
               this.posts = this.posts.filter(post => post.id !== id) 
            })
        }
    }
}
</script>

<style>

</style>
