import {Component} from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

  @Component({
    providers: [TodoDataService],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
    onAddTodo(todo: Todo) {
      this.todoDataService.addTodo(todo);
    }

    onToggleTodoComplete(todo: Todo) {
      this.todoDataService.toggleTodoComplete(todo);
    }

    onRemoveTodo(todo: Todo) {
      this.todoDataService.deleteTodoById(todo.id);
    }

    get todos() {
      return this.todoDataService.getAllTodos();
    }

}
