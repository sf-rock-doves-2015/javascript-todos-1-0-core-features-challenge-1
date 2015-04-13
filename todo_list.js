

var createTodoList = function() {
  var todoList = {};
  todoList.list = [];

  todoList.add =  function(item){
    todoList.list.push({description: item, completed: false});
  }
  todoList.complete = function(index){
    todoList.list[index].completed = true;
  }
  todoList.listAll = function(){
    for (i=0; i<todoList.list.length; i++){
      console.log(todoList.list[i]);
    }
  }
  todoList.indexOf = function(item) {
    for (i=0; i<todoList.list.length; i++){
      if (todoList.list[i] === item){
        console.log(i);
      }
    }
  }
  todoList.remove = function(index){
   todoList.list.splice(index, 1);
 }
  todoList.get = function(index) {
    return todoList.list[index];
  }

 return todoList;
};

// var createTodoList = function(array){
// this.todoList = array;
// this.add = function(item){
// this.todoList.push(item)
// }
// this.list = function(){
// for (i=0; i<this.todoList.length; i++){
// console.log(this.todoList[i]);
// }
// }
// this.indexOf = function(item) {
// for (i=0; i<this.todoList.length; i++){
// if (this.todoList[i] === item){
// console.log(i);
// }}}
// this.remove = function(index){
// this.todoList.splice(index, 1);
// }
// }




// Driver code


// Release 1

var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.listAll(); //-> ['bread', 'cheese', 'milk']
groceryList.indexOf('cheese'); //-> 1
groceryList.remove(1);
groceryList.listAll(); //-> ['bread', 'milk']

// release 2
var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.listAll(); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: false},
// {description: 'milk', completed: false},
groceryList.indexOf('cheese'); //-> 1
groceryList.get(1); //-> {description: 'cheese', completed: false}
groceryList.complete(1);
groceryList.listAll(); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: true},
// {description: 'milk', completed: false},
// ];
groceryList.remove(1);
groceryList.listAll(); //-> [
// {description: 'bread', completed: false},
// {description: 'milk', completed: false},
// ];
