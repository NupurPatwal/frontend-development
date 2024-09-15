// 1. list - to show all todos
// 2. add - to add a todo
// 3. delete - to delete a task
// 4.quit - to exit a todo

let todo = [];
let request;
while (true) {
  request = prompt("Enter the todo...");
  if (request == "quit") {
    console.log("Quitting the app.");
    break;
  }

  if (request == "list") {
    console.log("--------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);

      // for (task of todo) {
      //   console.log(task);
    }
    console.log("--------------");
  } else if (request == "add") {
    let task = prompt("Please enter the task you want to add?");
    todo.push(task);
    console.log("task added");
  } else if (request == "delete") {
    let index = prompt("Please enter the index you want to delete?");
    todo.splice(index, 1);
    console.log("task deleted");
  } else {
    console.log("wrong request");
  }
  request;

  //    else if (request == "delete") {
  //     console.log(todo.pop());
  //   }
}
