import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.class';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    @Input() tasks: Task[];
    @Output() setStatusConnector = new EventEmitter<Task>();
    @Output() delete = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    setStatus(task: Task) {
        this.setStatusConnector.emit(task);
    }

    onDelete(id: number) {
        this.delete.emit(id);
    }
}
