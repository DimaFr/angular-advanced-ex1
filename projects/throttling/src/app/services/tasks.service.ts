import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs';

const TASKS_URL: string = "https://nztodo.herokuapp.com/api/task/"
const PARAMS_PREFIX: any = { 'format': 'json' }

@Injectable({ providedIn: 'root' })

export class TasksService {
    constructor(private httpClient: HttpClient) { }

    private  params = new HttpParams({fromObject:PARAMS_PREFIX});

    public getTasks(searchStr: string):Observable<any> {
        let params: HttpParams = this.createSearchParams(searchStr);
        return this.httpClient.get(TASKS_URL,{params})
        // .pipe( //mistake!!!!: will catch in component
        //     catchError(
        //         (err:Error)=>throwError(err))
        // )
    }

    private createSearchParams(searchStr: string): HttpParams {
        let params = this.params;
        params =  params.append('search',searchStr);
        return params;
    }



}