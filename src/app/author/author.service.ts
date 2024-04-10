import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  pendingReq: boolean = false;
  apiUrl: string = 'https://picsum.photos/v2/list';
  detailApi: string = 'https://picsum.photos/id';

  constructor(private http:HttpClient) { }

  get(page: number, perPage: number){
    if (this.pendingReq) {
      return {} as Observable<{}>;
    }
    this.pendingReq = true;
    const url = `${this.apiUrl}?page=${page}&limit=${perPage}`;
    this.pendingReq = false;
    return this.http.get<any>(url).pipe(delay(1500));
  }

  getDetail(id: string){
    if (this.pendingReq) {
      return {} as Observable<{}>;
    }
    this.pendingReq = true;
    const url = `${this.detailApi}/${id}/info`;
    this.pendingReq = false;
    return this.http.get<any>(url).pipe(delay(1000));
  }
}
