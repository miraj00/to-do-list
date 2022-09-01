import { Component, OnInit, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

import { Todo } from 'src/app/interface/todo';

 import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo;
    @Output() complete = new EventEmitter<string>();
    @Output() remove = new EventEmitter<string>();
    
  faXmark = faXmark;

  constructor() {
      this.todo = {
        task: '',
        completed: false,
      };
   }

  ngOnInit(): void {
  }


  completeTask(): void {
    this.complete.emit(this.todo.task);
  }

  removeTask(): void {
    this.remove.emit(this.todo.task);
  }
}
