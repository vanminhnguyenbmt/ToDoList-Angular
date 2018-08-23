import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.class';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    @Input() tasks: Task[];
    @Output() setStatusConnector = new EventEmitter<Task>();
    @Output() delete = new EventEmitter<number>();
    @Output() update = new EventEmitter<Task>();

    public status = 0;
    public subscription: Subscription;

    constructor(
        public activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe((data: Params) => {
            this.status = data.completed ? (data.completed === 'true' ? 1 : -1) : 0;
        });
    }

    setStatus(task: Task) {
        this.setStatusConnector.emit(task);
    }

    onDelete(id: number) {
        this.delete.emit(id);
    }

    onUpdate(task: Task) {
        this.update.emit(task);
    }
}
