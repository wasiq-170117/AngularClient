import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  Url = environment.developmentUrl;
  createNewUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.Url}/userRoutes/createNew`, data).
    pipe(
      catchError(error => {
        console.log('Error', error);
        return throwError(() => {
          new Error(error);
        }); 
      })
    );
  }

  GetAllUsers(): Observable<any> {
    
    return this.http.get<any>(`${this.Url}/userRoutes/users`).
    pipe(
      catchError(error => {
        console.log('Error: ', error);
        return throwError(() => {
          new Error(error);
        });
      })
    );
  }

  UpdateData(user: any, user_id: any): Observable<any> {
    return this.http.patch<any>(`${this.Url}/userRoutes/users/${user_id}`, user).
    pipe(
      catchError(error => {
        console.log('Error: ', error);
        return throwError(() => {
          new Error(error);
        });
      })
    );
  }

  Delete(id: any): Observable<any> {
    
    return this.http.delete<any>(`${this.Url}/userRoutes/users/${id}`)
    .pipe(
      catchError(error => {
        console.log('Error: ', error);
        return throwError(() => {
          new Error(error);
        });
      })
    );
  }
}
