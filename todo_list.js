// RELEASE 1 SOLUTION
// var createTodoList = function() {
//   var todoList = {
//     items: [],
//     add: function(item){
//       this.items.push(item);
//     },
//     list: function(){
//       return this.items;
//     },
//     indexOf: function(item){
//       return this.items.indexOf(item);
//     },
//     remove: function(index){
//       this.items.splice(index,1);
//     }
//   };
//   // your code here
//   return todoList;
// };


// RELEASE 2 SOLUTION
var createTodoList = function() {
  var todoList = {};

  todoList.items = [];

  todoList.add = function(item){
    this.items.push({description: item, completed: false});
  };

  todoList.list = function(){
    return this.items;
  };

  todoList.indexOf = function(item){
    items = this.items
    for(var i = 0; i < this.items.length; i++){
      if(items[i]["description"] === item) {
        return i;
      }
    }
  };

  todoList.get = function(index){
    return this.items[index];
  };

  todoList.complete = function(index){
    this.items[index].completed = true
  };

  todoList.remove = function(index){
    this.items.splice(index,1);
  };
  return todoList;
};

// DRIVER CODE:
// Release 1

// var groceryList = createTodoList();
// groceryList.add('bread');
// groceryList.add('cheese');
// groceryList.add('milk');
// groceryList.list(); //-> ['bread', 'cheese', 'milk']
// groceryList.indexOf('cheese'); //-> 1
// groceryList.remove(1);
// groceryList.list(); //-> ['bread', 'milk']


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

