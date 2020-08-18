import { Component } from '@angular/core';
import { TasksSearchDir } from './directives/tasks.directive';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'throttling?';
  tasks: any[] = [];

  constructor(private taskService: TasksService) {

  }

  onSearchTextEvent(e) {
    console.log(e);
    
    this.taskService.getTasks(e)
    .subscribe(
      (res:any) => this.tasks = res,
      (err:Error) => this.tasks = [err.message]
    )      

  }

}
