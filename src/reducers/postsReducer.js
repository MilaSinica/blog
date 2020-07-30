import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case DELETE_POST: {
            return _.omit(state, action.payload)
        }

        case FETCH_POSTS: {
            return _.mapKeys(action.payload.data, 'id');
        }

        case FETCH_POST: {
            //add new value to state with a key of post id and value of post data
            return { ...state, [action.payload.data.id]: action.payload.data }
        }

        default: return state;   
    } 

}