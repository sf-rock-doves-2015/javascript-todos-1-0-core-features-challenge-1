var createTodoList = function() {
  var todoList = {
    tasks: [],

    add: function(item) {
      this.tasks.push({
        description: item,
        completed: false,
      });
    },
    list: function(){
      return this.tasks;
    },

    indexOf: function(item){
        for(var i=0; i < this.tasks.length; i++){
          if (this.tasks[i].description === item)
            return i;
        }
      },

    remove: function(index){
      this.tasks.splice(index,1);
    },

    get: function(index){
      return this.tasks[index]
     },

    complete: function(index){
      this.tasks[index].completed = true
      },
    };
  // your code here

  return todoList;
};

ginnylist = createTodoList()







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
