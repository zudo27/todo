import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interface/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos: any ;
  completed: boolean = false;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((e)=>{
      this.todos = e;
    });
  }
  onChange() {
    console.log("changed");
    this.completed = !this.completed;
  }

  onCliCk(e: any) {
    console.log("Clicked");
    console.log(e);
  }

  // toggleClass() {
  //   if (this.completed) {
  //     return { 'list-group-item-success': this.completed, 'border-primary': this.completed };
  //   } else {
  //     console.log('n')
  //   }
  // }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

}
