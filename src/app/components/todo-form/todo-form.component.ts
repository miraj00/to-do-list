import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Todo } from 'src/app/interface/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @ViewChild('todoListForm') userForm: NgForm | undefined;
  @Output() save = new EventEmitter<Todo>();

  formTodo: Todo;
  submitTodo: Todo;


  constructor() { 
      this.formTodo = {
        task: '',
        completed: false,
      };
      this.submitTodo = { ...this.formTodo };
  }

  ngOnInit(): void {
  }

  submitTask(): void {
    this.submitTodo = { ...this.formTodo };
    this.save.emit(this.submitTodo);
    this.formTodo.task = '';
  }
}