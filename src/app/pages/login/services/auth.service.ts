import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly env = environment.endpoint.login;

  constructor(private http: HttpClient) { }

  login(body: any) {
    return this.http.post(environment.url + this.env.post.login, body);
  }
}
