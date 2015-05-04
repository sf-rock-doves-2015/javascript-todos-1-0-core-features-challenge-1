var createTodoList = function() {
  var todoList = {
    items: [],

    add: function(new_item){
      var new_item = {
        description: new_item,
        completed: false,
      };
      this.items.push(new_item);
    },

    list: function(){
      for (var i = 0; i < this.items.length; i++){
        console.log(this.items[i]);
      };
    },

    indexOf: function(search_item){
      console.log(this.items.indexOf(search_item));

    },

    remove: function(index_of_item){
      this.items.splice(index_of_item,1);
    },

    complete: function(index_to_complete){
      this.items[index_to_complete].completed = true;
    },

    get: function(index_of_item){
      console.log(this.items[index_of_item].description);
    },

  };
  return todoList;
};






// Driver code


// Release 1
console.log("Release 1");
var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> ['bread', 'cheese', 'milk']
console.log("Expecting an index next:");
groceryList.indexOf('cheese'); //-> 1
groceryList.indexOf('eggs');
console.log("Removing Cheese");
groceryList.remove(1);
groceryList.list(); //-> ['bread', 'milk']

// release 2
console.log("Release 2");
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
console.log("Return item when gets is called");
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
