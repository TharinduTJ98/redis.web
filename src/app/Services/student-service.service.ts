import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllStudent():Observable<any>{
    return this.http.get('https://localhost:7250/api/Student/getAllStudent');
  }
}
