//action类型
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

//其他常量
export const VisibilityFilters = {
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'
};

export function addTodo (text) {
    return {
        type:ADD_TODO,
        text
    }
};

export function updateTodo(id){
    return {
        type:UPDATE_TODO,
        id
    }
}

export function setVisibilityFilter(filter){
    return {
        type:SET_VISIBILITY_FILTER,
        filter,
    }
}

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function invalidatesubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'

export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
export function fetchPosts(subreddit) {
    return function (dispatch) {
  
      dispatch(requestPosts(subreddit))
  
      return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
        .then(
          response => response.json(),
           error => console.log('An error occurred.', error)
        )
        .then(json =>
          dispatch(receivePosts(subreddit, json))
        )
    }
  }