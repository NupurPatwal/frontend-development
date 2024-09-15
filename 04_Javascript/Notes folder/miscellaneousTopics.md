# Javascript Interview Questions

### How JavaScript Works 🔥& Execution Context Ep. 2 :-

[Youtube channel akshay saini](https://youtu.be/ZvbzSrg0afE?si=Kz7EOFbioGR5cxus)

> Takeaways:

1. Everything in js happens inside the exceution context.
2. Exceution context is like a big box and it has two components.

- Memory component : All the variables and functions are stored as a key value pair. The memory component is also known as variable env.
- Code component : This is the place where code is excuted one line at a time. AKA thread of exceution.

3. JavaScript is synchronous single - threaded language.

- synchronous means : one command at a time and in a specific order. It means it'll go to the second line once the current line has been exceuted.
- single-threaded : js can only exceute one command at a time.

4. Whenever any JavaScript code is executed an execution context is created and it is the Global Execution Context.
5. An Execution Context is basically a box which has two components called Memory Component(Variable Environment) and Code Component(Thread Of Execution).

### How JavaScript Code is executed? ❤️& Call Stack | Namaste JavaScript Ep. 2

> - What happens when you run JavaScript Code?

> - Global Execution Context Creation

> - Memory Allocation Phase & Code Execution Phase

> - Function Invocation and Execution Context Creation

> - What happens while executing return statement

> - Call Stack in JavaScript

> - Other names of the Call Stack in JS

6. The Execution context is created in two phases

   - Memory Creation Phase : In this Phase, Memory is allocated to all the variables and functions which are present in the global scope. Special keyword Undefined in case of variables and literally the whole function in case of functions.
   - Code Execution Phase : In this Phase, code is executed line by line.

7. Whenever there is a function invocation an all new execution context is created and same process is followed again.
8. If there is any function parameter then it is also allocated memory while creating the execution context of the function.
9. Whenever return keyword is encountered , it means the task of function is over and it returns back the control of the program back to the place where it was invoked. and with this this execution context is deleted from stack.

10. **Call Stack is basically a stack which maintains the order of execution of execution context**. Whenever a code is executed the Global Execution Context is pushed into the stack first and later on as per the function invocation the execution context is pushed into the stack. When the function code is done executing the execution context is popped out and last the Global Execution Context s also deleted.
