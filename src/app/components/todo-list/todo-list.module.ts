import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list.component';
import { CommonModule } from '@angular/common';
import { EditTodoListComponent } from '../edit-todo-list/edit-todo-list.component';
import { AddTodoListComponent } from '../add-todo-list/add-todo-list.component';

const routes: Routes = [
    { path: '', component: TodoListComponent },
    { path: 'add', component: AddTodoListComponent },
    { path: 'edit/:id', component: EditTodoListComponent },
  ];
  
  @NgModule({
    declarations: [TodoListComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)],
  })
  export class TodoListModule { }