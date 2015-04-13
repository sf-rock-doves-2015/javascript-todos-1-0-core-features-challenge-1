//Psuedo code
//Create a function(createTodoList) that builds a JS object with the follow properties and fcns:

//Functions:
//function to add a todo
//function to list all todos
//function to remove a todo
//Properties:
//an array called: tasks

var createTodoList = function() {
  var todoList = {};

  todoList.tasks = [];
  todoList.add = function(item) {
      this.tasks.push(item);
  };

  todoList.list = function() {
      for(var i=0; i<this.tasks.length; i++) {   //is good to use var here?
        console.log(this.tasks[i]);
      }
  };

  todoList.remove = function(idx) {
      this.tasks.splice(idx, 1)
  };

  todoList.indexOf = function(item) {
    this.tasks.indexOf(item);
  };

  return todoList;
};


// Driver code
// Release 1
var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> ['bread', 'cheese', 'milk']
groceryList.indexOf('cheese'); //-> 1
groceryList.remove(1);
groceryList.list(); //-> ['bread', 'milk']

// release 2
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
