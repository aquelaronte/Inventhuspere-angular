import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/interfaces/product';
import { Profile } from 'src/app/interfaces/profile';
import { Sale } from 'src/app/interfaces/sale';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  user!: User;
  profile!: Profile;
  products!: Product[];
  sales!: Sale[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserData().subscribe({
      next: ({ response }: any) => {
        this.user = response;
        this.profile = this.user.profile;
        this.products = this.user.products;
        this.sales = this.user.sales;
      },
    });
  }
}
