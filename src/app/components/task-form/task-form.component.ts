import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

    @Output() addTask = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    onSubmit(e, title) {
        e.preventDefault();
        this.addTask.emit(title.value);
        title.value = '';
    }
}
