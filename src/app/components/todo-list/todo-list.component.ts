import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title: string = 'My To-Do List';    // it's getting used in html file

  todoList: Todo[] = [];

  completedTodos: Todo[] = [];

  filteredIndexes: number[] = [];
  filteredList: Todo[] = [];


  constructor() {
    // Array of data added 
      this.todoList = [
        {
          task: 'Do Dishes',
          completed: false,
        },
        {
          task: 'Start Laundry',
          completed: false,
        },
        {
          task: ' Floor Cleaning',
          completed: false,
        },
        {
          task: 'Do Vacuum',
          completed: false,
        },
      ];
  }

  ngOnInit(): void {}

  // addTodo function will keep existing 'todoList' array and add 'todo'  in it  : 
  addTodo(todo: Todo): void {
    this.todoList = [...this.todoList, todo];
  }

  // removeTodo function will map the index and then splice value using that index :
  removeTodo(todoIn: string): void {
        console.log('removeTodo: ' + todoIn);
        let index = 0;

    this.todoList.map((todo, i) => {
      if (todo.task === todoIn) {
        index = i;
      }
      return index;
    });
    this.todoList.splice(index, 1);
  }

  //completeTodo function will give true value to completed tasks and add in tpo array :
  completeTodo(todo: string, i: number): void {
        let tempTodo = {
          task: todo,
          completed: true,
        };

       console.log(this.todoList[i]);
    
    this.todoList[i].completed = !this.todoList[i].completed;

    this.completedTodos = [...this.completedTodos, tempTodo];
  }

  // searchList function :
  searchList(search: string) {
        this.filteredIndexes = [];
    
    if (search === '') {
      console.log('search empty');
    } else {
      this.todoList.forEach((todo, i) => {
        !todo.task.toLowerCase().includes(search.toLowerCase()) &&
          this.filteredIndexes.push(i);
      });
      // console.log(this.filteredIndexes);
    }
  }




}
