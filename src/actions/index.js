import jsonPlaceholder from '../api/jsonplaceholder';
import postsApi from '../api/postsApi';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

const KEY = '?key=mila21';

export function fetchPosts() {
    const request = postsApi.get(`/posts${KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(post, callback) {
    const request = postsApi.post(`/posts${KEY}`, post)
        //to complete action after request is completed
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const request = postsApi.get(`/posts/${id}${KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    postsApi.delete(`/posts/${id}${KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}

export function fetchComments() {
    const request = jsonPlaceholder.get('/posts');

    return {
        type: FETCH_COMMENTS,
        payload: request
    }
}

export function fetchUsers() {
    const request = jsonPlaceholder.get(`/users`);

    return {
        type: FETCH_USERS,
        payload: request
    }
}
