let todoList = {
  todos: [],
  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log('Die Liste ist leer.')
    } else {
      console.log('My todos:');
      for (let i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].todoText);

        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },


  addTodo: function(todoText) { // todoText ist ein parameter Bsp.'hi'
    this.todos.push({
      todoText: todoText, // dann würde hier 'hi' stehen
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function (position, todoText) {
    // this.todos[position] = newValue;
    this.todos[position].todoText = todoText; // todoText parameter wird wieder verwendet
    this.displayTodos();
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1)
    this.displayTodos();
  },

  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;  // gegenteil von ist-zustand von todo.completed
    this.displayTodos();
  }
};
