
var createTodoList = function() {
  var taskList = []
  var todoList = {}
  var task = function(item){
  	return {
  		description: item,
  		completed: false
  	}
  }

  todoList.add = function(item){
  	taskList.push(task(item))
  }

  todoList.list = function(){
  	console.log(taskList)
  }

  todoList.indexOf = function(item){
  	for(var i = 0; i < taskList.length; i++){
  		if (taskList[i].description === item) console.log(i)
  	}
  }

  todoList.remove = function(index){
  	taskList.splice(index, 1)
  }

  todoList.get = function(index){
  	console.log(taskList[index])
  }

  todoList.complete = function(index){
  	taskList[index].completed = true
  }

  return todoList
}






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
