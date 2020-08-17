import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const TASKS_URL: string = "https://nztodo.herokuapp.com/api/task"
const PARAMS_PREFIX: any = { 'format': 'json' }

@Injectable({ providedIn: 'root' })

export class TasksService {
    constructor(private httpClient: HttpClient) { }

    public getTasks(searchStr: string) {
        let params: HttpParams = this.createSearchParams(searchStr);
    }
    createSearchParams(searchStr: string): HttpParams {
        throw new Error("Method not implemented.");
    }



}