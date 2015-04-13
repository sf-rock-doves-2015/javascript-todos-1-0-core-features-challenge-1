var createTodoList = function() {
  var todoList = {};

  todoList.tasks = [];

  todoList.add = function(item) {
    this.tasks.push({description: item, completed: false});
  };

  // this.tasks = function() {
  //   return todoList;
  // };

  todoList.list = function() {
    return this.tasks;
  };

  todoList.indexOf = function(task) {
    for (i=0; i<this.tasks.length; i++) {
      if (this.tasks[i].description === task) {
        return i;
      };
    };
  };

  todoList.remove = function(index) {
    this.tasks.splice(index, 1);
  };

  todoList.get = function(index) {
    return this.tasks[index];
  };

  todoList.complete = function(index) {
    this.tasks[index].completed = true;
  };

  return todoList;
};






// Driver code


// Release 1

var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.tasks; //-> ['bread', 'cheese', 'milk']
groceryList.list(); //-> ['bread', 'cheese', 'milk']
groceryList.indexOf('cheese'); //-> 1
groceryList.remove(1);
groceryList.list(); //-> ['bread', 'milk']

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
