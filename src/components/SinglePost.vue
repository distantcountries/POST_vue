<template>
    <div>
        <router-view />
        <h1>{{post.title}}</h1>
        <p>{{ post.text }}</p>
        <hr>

        <h5>Comments:</h5>
        <ul>
            <li v-for="comment in allComments" :key="comment.id">
                {{ comment.text }}
                {{ comment.createdAt | diffForHumans }} - {{ comment.text }}
            </li>
        </ul>
        <hr>

        <add-comment @addComment="handleComment"></add-comment>

    </div>
</template>

<script>
import { postsService } from './../services/PostsService'
import { DateMixins } from '../mixins'
import AddComment from './AddComment' //ovde ne idu {}, sa njima nece raditi
export default {
    data() {
        return {
            post:'',
            id:''
        }
    },

    mixins:[DateMixins],

    components: {
        AddComment
    },

    created(){
       this.id = this.$router.currentRoute.params.id; 
       if (this.id){
           this.getPost(this.id)
       }
    },

    computed: {
        allComments() {
            return this.post.comments
        }
    },

    methods: {
       getPost(id){
            postsService.get(this.id)
            .then(response => {
                this.post = response.data
            })
        },

        handleComment(newComment) {
            postsService.addComment(this.id, newComment)
            .then(response => {
                this.post.comments.push(response.data)
                newComment.text=''
            })
        }, 

    }

}
</script>

<style>

</style>
