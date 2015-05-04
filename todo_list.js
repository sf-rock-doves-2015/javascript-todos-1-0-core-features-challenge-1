var createTodoList = function() {
  var items = [];
  var todoList = {

    add: function(item) {
      items.push({description: item, completed: false});
    },

    list: function() {
      for (i = 0; i < items.length; i++) {
        console.log(items[i]);
      };
    },

    indexOf: function(description) {
      for (i = 0; i < items.length; i++) {
        if (items[i].description === description) {
          console.log(i);
        }
      };
    },

    remove: function(item_index) {
      items.splice(item_index, 1);
      return items;
    },

    get: function(item_index) {
      items[item_index];
    },

    complete: function(item_index) {
      for (i = 0; i < items.length; i++) {
        if (i === item_index) {
          console.log(items[i].completed = true);
        }
      };
    }

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
