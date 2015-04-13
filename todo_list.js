var createTodoList = function() {
  var todoList = {};
  var todoItems = [];

  todoList.add = function(item) {
    todoItems.push({description: item, completed: false});
  };

  todoList.tasks = todoItems;
  // this.tasks = function() {
  //   return todoList;
  // };

  todoList.list = function() {
    for (i=0; i< todoItems.length; i++) {
      console.log(todoItems[i]);
    };
  };

  todoList.indexOf = function(task) {
    for (i=0; i<todoItems.length; i++) {
      if (todoItems[i].description === task) {
        return i;
      };
    };
  };

  todoList.remove = function(index) {
    todoItems.splice(index, 1);
  };

  todoList.get = function(index) {
    return todoItems[index];
  };

  todoList.complete = function(index) {
    todoItems[index].completed = true;
  };

  return todoList;
};






// Driver code


// Release 1

// var groceryList = createTodoList();
// groceryList.add('bread');
// groceryList.add('cheese');
// groceryList.add('milk');
// groceryList.list(); //-> ['bread', 'cheese', 'milk']
// groceryList.indexOf('cheese'); //-> 1
// groceryList.remove(1);
// groceryList.list(); //-> ['bread', 'milk']

// // release 2
var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: false},
// {description: 'milk', completed: false},
// ];
groceryList.indexOf('cheese'); //-> 1
groceryList.get(1); //-> {description: 'cheese', completed: false}
groceryList.complete(1);
groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: true},
// {description: 'milk', completed: false},
// ];
groceryList.remove(1);
groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'milk', completed: false},
// ];
