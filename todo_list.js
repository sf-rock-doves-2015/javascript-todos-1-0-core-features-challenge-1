var createTodoList = function() { //Look at driver code

  var todoList = {                //need an add function and something to hold it
    list_array: [], //list(key) [](value) is a hash in the todo list object/hash
    add: function(item){ //make add function that accepts an item
      this.list_array.push({description: item, completed: false}) //it pushes a hash into the
    },  //array. also initializes and sets the completed key and value to false and pushes it
        //it doesn't need to accept 'completed', just change the value thats already there.
    list: function(){
    this.list_array //simply lists the whole array
  },

    indexOf: function(item){ //takes the item as an argument and finds its index
      for (var i = 0; i < this.list_array.length; i++) { //basic JS for loop
        if (this.list_array[i].description === item){ //checks item description at index
          return i                                    //with argument
        };
      };
    },

    get: function(index) //returns object at index specified in the argument
    return this.list_array[index]
    },

    remove: function(index){        //index is given as argument and object at
      delete this.list_array[index] //that index is removed
    },

    complete: function(index){ //just changes the value from false to true when
      this.list_array[index].completed = true //the method is called on that index
    },

  };

  // your code here

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
// complete should mark the task as completed
groceryList.complete(0);
groceryList.list(); //-> [
// {description: 'bread', completed: true},
// {description: 'milk', completed: false},
// ];
