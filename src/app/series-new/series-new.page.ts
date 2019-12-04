import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series-new',
  templateUrl: './series-new.page.html',
  styleUrls: ['./series-new.page.scss'],
})
export class SeriesNewPage implements OnInit {
  newSeries = {name: ''};

  constructor( private seriesService: SeriesService,
               private router: Router) { }

  ngOnInit() {
  }

  addSeries() {
    console.log(this.newSeries);
    this.seriesService.addSeries(this.newSeries)
      .then(data => {
        console.log(data);
        this.router.navigateByUrl('/tabs/tab2');
      })
      .catch(error => {
        console.log(error);
      });
  }

  inputCheck() {
    return (this.newSeries.name == '');
  }

}
