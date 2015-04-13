var createTodoList = function() {
  var todoList = {
    list_array: [],
    add: function(item){
      this.list_array.push({description: item, completed: false});
    },
    list: function(){
      return this.list_array
    },
    indexOf: function(item){
      for (var i=0; i<this.list_array.length; i++){
        if (this.list_array[i].description === item){
          return i
        };
      };
    },
    get: function(index) {
      return this.list_array[index]
    },
    remove: function(index){
      delete this.list_array[index]
    },
    complete: function(index) {
      this.list_array[index].completed = true
    }
  // your code here
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
