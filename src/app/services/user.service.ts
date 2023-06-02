import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Profile } from '../interfaces/profile';
import { Sale } from '../interfaces/sale';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://inventusphere.onrender.com/api';

  getUserData() {
    return this.http.get(this.apiUrl + '/profile');
  }
}
