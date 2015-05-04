var createTodoList = function() {

  var todoList = {
    todoListArray: [],

    add: function(descript) {
      var item = {description: descript, completed: false}
      this.todoListArray.push(item)
    },

    list: function() {
      console.log(this.todoListArray)
      this.todoListArray
    },

    indexOf: function(item) {
      // console.log(this.todoListArray.indexOf(item))
      this.todoListArray.indexOf(item)
    },

    remove: function(index) {
      delete this.todoListArray[index]
    },

    get: function(index) {
      // console.log(this.todoListArray[index])
      this.todoListArray[index]
    },

    complete: function(index) {
      this.todoListArray[index]["completed"] = true
    },
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
