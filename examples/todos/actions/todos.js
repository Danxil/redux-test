let nextTodoId = 0

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    todo: {
      id: nextTodoId++,
      completed: false,
      text
    }
  }
}

export const toggleTodo = (todoId) => {
  return {
    type: 'TOGGLE_TODO',
    todoId
  }
}
