import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  id: number;
  data: any;
  addresses: any;
  user: any;

  constructor(
    private navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {}

  ionViewWillEnter() {
    const user = this.activatedRoute.snapshot.params['user'];
    this.user = JSON.parse(user);
    console.log(this.user);
  }

  onClick() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.user = '';
  }

  formatDate(date) {
    return moment(date).format('MMMM Do,YYYY');
  }
}
