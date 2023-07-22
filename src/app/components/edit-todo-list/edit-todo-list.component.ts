import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/interface/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-edit-todo-list',
  templateUrl: './edit-todo-list.component.html',
  styleUrls: ['./edit-todo-list.component.scss']
})
export class EditTodoListComponent implements OnInit {
  todo: Todo | any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.todoService.getTodos().subscribe((todos) => {
      this.todo = todos.find((t) => t.id === +id);
    });
  }

  updateTodo() {
    this.todoService.updateTodo({ ...this.todo });
    this.router.navigate(['/todo']);
  }
}
