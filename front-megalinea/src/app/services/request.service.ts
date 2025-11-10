import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  create(request: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, request);
  }

  approve(id: number, comment: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/approve?comment=${encodeURIComponent(comment)}`, {});
  }

  reject(id: number, comment: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/reject?comment=${encodeURIComponent(comment)}`, {});
  }

  getPendingRequests(approver: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pending/${approver}`);
  }


}
