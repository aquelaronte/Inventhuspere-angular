import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Signin } from '../interfaces/signin';
import { Signup } from '../interfaces/signup';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://inventusphere.onrender.com/api';
  constructor(private http: HttpClient, private router: Router) {}

  signup(data: Signup) {
    return this.http.post(this.apiUrl + '/auth/signup', data);
  }

  login(data: Signin) {
    return this.http.post(this.apiUrl + '/auth/signin', data);
  }

  checkLogin(): boolean {
    return !!localStorage.getItem('Authorization');
  }

  getToken() {
    return localStorage.getItem('Authorization');
  }

  getId() {
    return localStorage.getItem('user-id');
  }

  logout() {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('user-id');
    localStorage.removeItem('profile');
    localStorage.removeItem('products');
    localStorage.removeItem('sales');
    this.router.navigate(['/signin']);
  }
}
