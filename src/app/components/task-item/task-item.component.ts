import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.class';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

    @Input() task: Task;
    @Output() setStatus = new EventEmitter();
    @Output() delete = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onSetStatus() {
        this.setStatus.emit();
    }

    onDelete() {
        this.delete.emit();
    }
}
