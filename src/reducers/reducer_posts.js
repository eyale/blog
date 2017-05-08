import FETCH_POSTS from '../actions'
const INITIAL_STATE = { all: [], posts: null }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action)
      return { ...state, all: action.payload.data }
    default :
      return state
  }
}