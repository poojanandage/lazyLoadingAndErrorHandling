import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";


@Injectable({
    providedIn : 'root'
}) 

export class DataService {
    baseUrl = 'https://jsonplaceholder.typicode.com/post'
    constructor(private http : HttpClient){

    }

    getallData() : Observable<any[]>{
        return this.http.get<any[]>(this.baseUrl)
        .pipe(
            retry(1),
            catchError(this.errorHandle)
        );
    }
    errorHandle(err : HttpErrorResponse){
        return  throwError(err ||'server error')
    }
}