import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.class';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    public tasks: Task[] = [];
    public subscription: Subscription;

    constructor(
        public taskService: TaskService
    ) { }

    ngOnInit() {
        this.subscription = this.taskService.getAll().subscribe((tasks: Task[]) => {
            this.tasks = tasks;
            console.log(this.tasks);
        });
    }

    addTask(title: string) {
        const task = new Task(title);
        this.subscription = this.taskService.add(task).subscribe((data: Task) => {
            this.tasks.push(data);
        });
    }

    setStatus(task: Task) {
        task.completed = !task.completed;
        this.subscription = this.taskService.update(task).subscribe((data: Task) => {
            this.updateData(data);
        });
    }

    updateData(data: Task) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === data.id) {
                this.tasks[i] = data;
                break;
            }
        }
    }

    onDelete(id: number) {
        this.subscription = this.taskService.delete(id).subscribe((data: Task) => {
            this.updateDataAfterDelete(id);
        });
    }

    updateDataAfterDelete(id: number) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) {
                this.tasks.splice(i, 1);
                break;
            }
        }
    }
}
