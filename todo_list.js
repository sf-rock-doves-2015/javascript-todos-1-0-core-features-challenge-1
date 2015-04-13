var createTodoList = function() {
  var todoList = {};
  var grocery_items = []

  todoList.add = function(item){grocery_items.push({description: item, completed: false});};

  todoList.tasks = grocery_items;

  todoList.list = function(){for(i = 0; i < grocery_items.length; i++){console.log(grocery_items[i]);};};

  todoList.indexOf = function(item) {for(i=0; i < grocery_items.length; i ++) {if(grocery_items[i] === item){console.log(i)};}};

  todoList.remove = function(index) {grocery_items.splice(index, 1);};

  todoList.complete = function(index) {grocery_items[index].completed = true};

  return todoList;
};

var groceryList = createTodoList()



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
// var groceryList = createTodoList();
// groceryList.add('bread');
// groceryList.add('cheese');
// groceryList.add('milk');
// groceryList.list(); //-> [
// // {description: 'bread', completed: false},
// // {description: 'cheese', completed: false},
// // {description: 'milk', completed: false},
// // ];
// groceryList.indexOf('cheese'); //-> 1
// groceryList.get(1); //-> {description: 'cheese', completed: false}
// groceryList.complete(1);
// groceryList.list(); //-> [
// // {description: 'bread', completed: false},
// // {description: 'cheese', completed: true},
// // {description: 'milk', completed: false},
// // ];
// groceryList.remove(1);
// groceryList.list(); //-> [
// // {description: 'bread', completed: false},
// // {description: 'milk', completed: false},
// // ];
