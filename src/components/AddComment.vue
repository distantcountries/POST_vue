<template>
    <div>
        <h5>Add comment</h5>
        <form @submit.prevent="handleComment">
            <input type="text" class="form-control" v-model="newComment.text" placeholder="Comment..." required />
            <button type="submit" class="form-control">Comment</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newComment: {
                text:''
            }
        }
    }, 

    methods: {
        handleComment() {
            this.$emit('addComment', this.newComment)
        }
    }
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
