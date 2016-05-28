const todos = (state = {
  list: [],
  isFetching: false
}, action = null) => {
  switch (action.type) {
    case 'GET_TODOS': {
      return state
    }
    case 'ADD_TODO': {
      state = Object.assign({}, state)

      state.list = [...state.list, action.todo]

      return state
    }
    case 'TOGGLE_TODO': {
      state = Object.assign({}, state)

      state.list = state.list.map(item=> Object.assign({}, item))

      state.list[action.todoId].completed = !state.list[action.todoId].completed

      return state
    }
    default: return state
  }
}

export default todos
