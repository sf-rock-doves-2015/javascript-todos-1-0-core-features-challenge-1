var createTodoList = function() {
  var todoList = {

    currentItems: [],

    add: function(item){
      var groceryObject = { description: item, completed: false };
      this.currentItems.push(groceryObject);
    },

    list: function(){
      var length = this.currentItems.length
      for (i = 0; i < length; i++){
        console.log(this.currentItems[i]);
      };
    },

    indexOf: function(item){
      var length = this.currentItems.length
        // console.log(this.currentItems.indexOf(itemSought.description.item));
      for (i = 0; i < length; i++){
        if (this.currentItems[i].description == item)
          return i
      };

    },

    remove: function(index){
      this.currentItems.splice(index, 1);

    },

  }; // todoList end
  // console.log(this.currentItems)

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

// // // release 2
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
// groceryList.get(1); //-> {description: 'cheese', completed: false}
// groceryList.complete(1);
// groceryList.list(); //-> [
// // {description: 'bread', completed: false},
// // {description: 'cheese', completed: true},
// // {description: 'milk', completed: false},
// // ];
// groceryList.remove(1);
// groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'milk', completed: false},
// ];
