import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isUserVerified = false;

  checkIsUserVerified() {
    const haveAuth = !!localStorage.getItem('Authorization');
    const haveId = !!localStorage.getItem('user-id');
    if (haveAuth && haveId) {
      this.isUserVerified = true;
    }
  }

  ngOnInit(): void {
    this.checkIsUserVerified();
  }
}
