import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//^^needed?


@Injectable({
  providedIn: 'root'
})
export class PublicAPIService {
  public publicAPI = [];

  constructor() { }
}
