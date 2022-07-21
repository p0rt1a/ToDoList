export class Task {
  public name: string;
  public status: boolean;

  constructor(name: string, status: boolean) {
    this.name = name;
    this.status = status;
  }
}

export class TaskListModel {
  public taskList: Array<Task>;

  constructor() {
    this.taskList = [
      new Task('Kahvaltı', false),
      new Task('Bulaşık', false),
      new Task('Ders', false),
      new Task('Proje', false),
      new Task('Sinema', false),
    ];
  }

  public getTasks(): Array<Task> {
    return this.taskList;
  }
}
