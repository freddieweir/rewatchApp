import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.page.html',
  styleUrls: ['./series-detail.page.scss'],
})
export class SeriesDetailPage implements OnInit {
  //description = "testDescription";
  series = {description: ""};
  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.series = this.seriesService.selectedSeries;
  }

}
