var createTodoList = function() {
  var todoList = {};
  todoList.cart = [];
  todoList.add = function(item) {

    this.cart.push( {description: item, completed: false} );
  };
  todoList.list = function(item) {
    for(var i = 0; i < this.cart.length; i++) {
      console.log(this.cart[i]);
    }
  };
  todoList.indexOf = function(item) {
    for(var i = 0; i < this.cart.length; i++) {
      if (this.cart[i].description === item) {
        console.log(i);
        return i;

      }
    }
  };
  todoList.remove = function(indexOf) {
    this.cart.splice(indexOf, 1)
  };
  todoList.get = function(index) {
    console.log(this.cart[index]);
    return this.cart[index];
  };
  todoList.complete = function(index) {
      this.cart[index].completed = true;
  };

  return todoList;
};



// Driver code
// Release 1

var groceryList = createTodoList();

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
//groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: false},
// {description: 'milk', completed: false},
// ];
//groceryList.indexOf('cheese'); //-> 1
//groceryList.get(1); //-> {description: 'cheese', completed: false}
groceryList.complete(1);
//groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: true},
// {description: 'milk', completed: false},
// ];
groceryList.remove(1);
groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'milk', completed: false},
// ];
