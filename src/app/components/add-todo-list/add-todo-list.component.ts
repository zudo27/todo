import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/interface/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.scss']
})
export class AddTodoListComponent {
  newTodo: Todo = { id: 1, title: '', completed: false };

  constructor(private todoService: TodoService, private router: Router, ) {}

  addTodo() {
    this.todoService.addTodo({ ...this.newTodo });
    this.newTodo = { id: 1, title: '', completed: false };
    this.router.navigate(['/todo']);
  }

}
