var createTodoList = function() {
  var todoList = {

    tasks: [],



    add: function(item){
      var status = false, name = item;

      this.tasks.push({description: name, completed: status});

    },

    list: function(){
      for(var i = 0; i < this.tasks.length; i++){
        console.log(this.tasks[i].description);
      };
    },

    get: function(index) {
      return this.tasks[index];
    },

    indexOf: function(itemDescription){
//search for item descritpion in the array of nested hashes tasks
      for (var i = 0; i < this.tasks.length; i++){
         if (this.tasks[i].description === itemDescription){
          return i;
         }
      }

    },

    complete: function(index_of_item){

      var item_hash = this.get(index_of_item);
      item_hash.completed = true;
    },

    remove: function(index){
      this.tasks.splice(index, 1);
    },


  };

  // your code here
  //list function should turn todoList object into an array with a for in loop



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
