import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.class';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    public API_URL = 'http://localhost:3000/tasks';

    constructor(
        public http: HttpClient
    ) { }

    getAll(): Observable<Task[]> {
        return this.http.get<Task[]>(this.API_URL);
    }

    add(task: Task): Observable<Task> {
        return this.http.post<Task>(this.API_URL, {
            title: task.title,
            completed: task.completed
        });
    }

    update(task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.API_URL}/${task.id}`, {
            title: task.title,
            completed: task.completed
        });
    }

    delete(id: number): Observable<Task> {
        return this.http.delete<Task>(`${this.API_URL}/${id}`);
    }
}
