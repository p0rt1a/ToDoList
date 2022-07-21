import { Component } from '@angular/core';
import { Task, TaskListModel } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: string = 'Alp';
  displayAll: boolean = false;

  myTaskList: Array<Task> = new TaskListModel().getTasks();

  public getTasks() {
    let returnList = [];
    for (let i = 0; i < this.myTaskList.length; i++) {
      if (this.myTaskList[i].status == false && !this.displayAll) {
        returnList.push(this.myTaskList[i]);
      }
    }

    if (this.displayAll) {
      returnList = this.myTaskList;
    }

    return returnList;
  }

  public addTask(value: string): void {
    if (value != '') {
      this.myTaskList.push(new Task(value, false));
    }
  }
}
