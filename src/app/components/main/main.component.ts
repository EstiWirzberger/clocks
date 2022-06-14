import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

export interface TimeObject {
  city: string;
  difference: any;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(public service: MainService) {}
  IsraelTimeDifference: any = 0;
  BangkokTimeDifference: any = 0;
  NewYorkTimeDifference: any = 0;
  LondonTimeDifference: any = 0;
  public listTimeObjects: TimeObject[] = [];
  public timeObject: TimeObject = {
    city: 'string',
    difference: 0,
  };
  ngOnInit(): void {
    this.service.httpGet().subscribe((result) => {
      if (result) {
        Object.entries(JSON.parse(JSON.stringify(result)).time).forEach((e) => {
          this.timeObject.city = e[0];
          this.timeObject.difference = e[1];
          this.listTimeObjects.push(this.timeObject);
          console.log(this.listTimeObjects);

          switch (e[0]) {
            case 'Bangkok': {
              this.BangkokTimeDifference = e[1];
              break;
            }
            case 'NewYork': {
              this.NewYorkTimeDifference = e[1];
              break;
            }
            case 'London': {
              this.LondonTimeDifference = e[1];
              break;
            }
          }
        });
      }
    });
  }
}
