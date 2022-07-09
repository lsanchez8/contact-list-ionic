import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usersData: any;

  constructor(public apiService: ApiService, public router: Router) {}

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not
    // called due to view persistence in Ionic
    this.getAllUsers();
  }

  getAllUsers() {
    //Get saved list of user
    this.apiService.getList().subscribe((response) => {
      console.log(response);
      this.usersData = response.results;
    });
  }

  gotoUserDetails(user) {
    this.router.navigate(['/user-detail', { user: JSON.stringify(user) }]);
  }

  // formatAddress(address) {
  //   return address[0].city;
  // }

  formatDate(date) {
    return moment(date).format('MM/DD/YY');
  }
}
