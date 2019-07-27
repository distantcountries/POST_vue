import axios from 'axios'

export default class PostsService {
    constructor() {
        axios.defaults.baseURL = "http://localhost:3000/api/"
    }

    getAll() {
        return axios.get('posts');
    }

    get(id) {
        return axios.get('posts/' + id + '?filter={"include":["comments"]}')
    }

    add(newPost) {
        return axios.post('posts', newPost)
    }

    edit(post) {
        return axios.put('posts', post)
    }

    delete(id) {
        return axios.delete('posts/' + id)
    }

    addComment(postId, comment) {
        return axios.post(`posts/${postId}/comments`, comment)
    }
}

export const postsService = new PostsService()