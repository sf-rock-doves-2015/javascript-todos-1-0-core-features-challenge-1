// var createTodoList = function() {


// var createTodoList = function() {
//   var todoList = {};

//   todoList.tasks = [];

//   todoList.add = function(item) {
//     todoList.tasks.push(item);
//   };

//   todoList.list = function() {
//     for(i=0; i < todoList.tasks.length; i++) {
//       console.log(todoList.tasks[i]);
//     };

//   };

//   todoList.indexOf = function(item) {
//     for(i=0; i < todoList.tasks.length; i++) {
//       if (todoList.tasks[i] === item) {
//         return i;
//       }
//     }
//   };

//   todoList.remove = function(index) {
//     todoList.tasks.splice(index, 1);
//   };
//   // your code here

//   return todoList;
// };

var createTodoList = function() {
  var todoList = {};
  todoList.tasks = [];

  var Item = function(description) {
    this.description = description;
    this.completed = false;
  };

  todoList.add = function(item) {
    todoList.tasks.push(new Item(item));
  };

  todoList.list = function() {
    for(i=0; i < todoList.tasks.length; i++) {
      console.log(todoList.tasks[i]);
    };
  };

  todoList.indexOf = function(item) {
    for(i=0; i < todoList.tasks.length; i++) {
      if (todoList.tasks[i].description === item) {
        return i;
      }
    }
  };

  todoList.remove = function(index) {
    todoList.tasks.splice(index, 1);
  };

  todoList.get = function(index) {
    return this.tasks[index]
  };

  todoList.complete = function(index) {
    this.tasks[index].completed = true
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
