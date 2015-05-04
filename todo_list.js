// Release 1

var createTodoList = function() {
  	var taskList = [];

  	var todoList = {
  		add: function(item) {
  			taskList.push(item);
  		},

  		list: function() {
  			console.log(taskList);
  		},

  		indexOf: function(item) {
  			for(var x = 0; x < taskList.length; x++) {
  				if(taskList[x] === item) {
  					console.log(x);
  				};
  			}
  		},

  		remove: function(index) {
  			for(var x = 0; x < taskList.length; x++) {
  				if (x === index) {
					taskList.splice(x, 1);
  				};
  			}
  		}
  	};

  	return todoList;
};

// Driver code - Release 1
var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); 			//-> ['bread', 'cheese', 'milk']
groceryList.indexOf('cheese'); 	//-> 1
groceryList.remove(1);
groceryList.list(); 			//-> ['bread', 'milk']
console.log('================================================');

// Release 2

var createTodoList = function() {
  	var taskList = [];

  	var todoList = {
  		add: function(item) {
  			var item_hash = {description: item, completed: false}
  			taskList.push(item_hash);
  		},

  		list: function() {
  			console.log(taskList);
  		},

  		indexOf: function(item) {
  			for(var x = 0; x < taskList.length; x++) {
  				if(taskList[x].description === item) {
  					console.log(x);
  				};
  			}
  		},

  		get: function(index) {
  			console.log(taskList[index]);
  		},

  		complete: function(index) {
  			taskList[index].completed = true;
  		},

  		remove: function(index) {
  			for(var x = 0; x < taskList.length; x++) {
  				if (x === index) {
  					taskList.splice(x, 1);
  				};
  			}
  		}
  	};

  	return todoList;
};			

// Release 2 - Driver Code
var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> [
// {description: 'bread', completed: false}, 
// {description: 'cheese', completed: false}, 
// {description: 'milk', completed: false}, ];
groceryList.indexOf('cheese'); //-> 1
groceryList.get(1); //-> {description: 'cheese', completed: false}
groceryList.complete(1);
groceryList.list(); //-> [
// // {description: 'bread', completed: false}, 
// // {description: 'cheese', completed: true}, 
// // {description: 'milk', completed: false}, 
// // ];
groceryList.remove(1);
groceryList.list(); //-> [
// // {description: 'bread', completed: false}, 
// // {description: 'milk', completed: false}, 
// // ];
