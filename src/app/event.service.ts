import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Evento {
  date: string;
  label: string;
  description: string;
  imageUrl: string;
}

@Injectable({ providedIn: 'root' })
export class EventService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.base}/events`);
  }
}
