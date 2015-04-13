// var listArray = [];

// var createTodoList = function() {
//   var todoList = {
//     add: function(item) {
//       listArray.push(item)
//     },
//     list: function(){
//       return listArray
//     },
//     indexOf: function(item){
//       return listArray.indexOf(item)
//     },
//     remove: function(indexOfItem){
//       listArray.splice(indexOfItem, 1)
//     },
//   };
//     return todoList;
// };
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

var listArray = [];

var createTodoList = function() {
  var todoList = {
    add: function(item) {
      listArray.push({description: item, completed: false})
    },
    list: function(){
      return listArray
    },
    indexOf: function(item){
      return listArray.indexOf(item)
    },
    remove: function(indexOfItem){
      listArray.splice(indexOfItem, 1)
    },
    get: function(indexOfItem) {
      listArray[indexOfItem]
    },
    complete: function(indexOfItem) {
      listArray[indexOfItem].completed = true
    },
  };
    return todoList;
};

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
// groceryList.remove(1);
// groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'milk', completed: false},
// ];
