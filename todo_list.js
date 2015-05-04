// var createTodoList = function() {

//   var items = [];

//   var todoList = {
//     add: function(item){
//       items.push(item);
//     },
//     list: function(item){
//       for (i = 0; i < items.length; i++) {
//         console.log(items[i]);
//       }
//     },
//     indexOf: function(item){
//       for (i = 0; i < items.length; i++) {
//         var array_item = items[i];
//         if (item === array_item){
//         console.log(i);
//         };
//       }
//     },
//     remove: function(index){
//       for (i = 0; i < items.length; i++) {
//         if (index === i){
//           items.splice(i, index);
//         };
//       }
//       console.log(items);
//     }
//   };
//   // your code here

//   return todoList;
// };

// #########################  RELEASE 2 ###############################
var createTodoList = function() {
/*var groceryItem = {
      description: item,
      completed: false,
    };
*/
  var todoList = {
    items: [],

    add: function(groceryItem){
      groceryObject = {
            description: groceryItem,
            completed: false
          };
      this.items.push(groceryObject);
    },
    list: function(){
      for (i = 0; i < this.items.length; i++) {
        console.log(this.items[i]);
      }
    },
    indexOf: function(item){
      for (i = 0; i < this.items.length; i++) {
        var array_item = this.items[i];
        if (item === array_item.description){
        console.log(i);
        };
      }
    },
    get: function(index){
      console.log(this.items[index]);
    },
    complete: function(index){
      this.items[index].completed = true
    },
    remove: function(index){
      this.items.splice(index, 1)
    }
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
// groceryList.list(); //-> ['bread', undefined, 'milk']

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
