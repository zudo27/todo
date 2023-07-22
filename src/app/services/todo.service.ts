import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];
  private todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([{
    id: 0,
    title: 'demo',
    completed: true

  }]);

  constructor() {}

  getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  addTodo(todo: Todo) {
    todo.id = this.todos.length + 1;
    this.todos.push(todo);
    this.todosSubject.next([...this.todos]);
  }

  updateTodo(todo: Todo) {
    const index = this.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      this.todos[index] = todo;
      this.todosSubject.next([...this.todos]);
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.todosSubject.next([...this.todos]);
  }

}
