//Psuedo code release 1
//Create a function(createTodoList) that builds a JS object with the follow properties and fcns:

//Functions:
//function to add a todo
//function to list all todos
//function to remove a todo

//function: get: that returns a task object given an index.
//function: complete: That marks a task as completed.

//Properties:
//An array called: tasks



var createTodoList = function() {
  var todoList = {};

  todoList.tasks = [];

  todoList.add = function(item) {
      // this.tasks.push(item);
      this.tasks.push({description: item, completed: false});
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
    // for(var i=0; i<this.tasks.length; i++) {
    //   var task = this.tasks[i];
    //   if (task.description === item) { return i; }
    // }
    //another way:
    for(var i=0; i<this.tasks.length; i++) {
      if (this.tasks[i].description === item) { return i; }
    }

    return -1;
  };

  todoList.get = function(idx) {
    console.log(this.tasks[idx]);
  };

  todoList.complete = function(idx) {
    this.tasks[idx].completed = true;
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
