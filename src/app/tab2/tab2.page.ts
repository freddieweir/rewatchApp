import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor( private userService: UserService,
               private seriesService: SeriesService,
               private router: Router) {
  }

  ngOnInit() {
  }

  onSelect(series) {
    console.log(series);
    this.seriesService.selectedSeries = series;
    this.router.navigateByUrl('/series-detail');
  }

  newSeries() {
    this.router.navigateByUrl('/series-new');
  }

}
