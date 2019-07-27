<template>
    <div>
        <form @submit.prevent="addPost">
            <input type="text" class="form-control" v-model="newPost.title" placeholder="Title" required pattern=".{2,}" title="2 characters minimum" />
            <input type="text" class="form-control" v-model="newPost.text" placeholder="Content" required pattern=".{0,300}" title="300 character maximum" />
            <button type="submit" class="form-control">Add post</button>
            <button type="button" class="form-control" @click="resetForm">Reset form</button>
            <button type="button" class="form-control" @click="editPost">Submit edited post</button>
        </form>
    </div>
</template>

<script>
import { postsService } from './../services/PostsService'
export default {
    data() {
        return {
            newPost: {
                title:'', 
                text:''
            }
        }
    }, 

    methods: {
        addPost(newPost) {
            postsService.add(this.newPost)
            .then(response => {
                this.$router.push('posts')
            })
        }, 

        resetForm() {
           this.newPost= {
                title:'', 
                text:''
            } 
        }, 

        editPost() {
            postsService.edit(this.newPost)
            .then(response => {
                this.$router.push('posts')
            })
        }, 

        getPost(id) {
            postsService.get(id)
            .then(response => {
                this.newPost = response.data
            })
        }, 

        
    }, 

    created(){
       this.id = this.$router.currentRoute.params.id; 
       if (this.id){
           this.getPost(this.id)
       }
    },

}
</script>

<style>

form {
    width: 50%;
    margin: 0 auto;
}

input, button {
    margin-bottom: 0.5rem;
}

</style>
