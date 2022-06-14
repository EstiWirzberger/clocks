import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css'],
})
export class DigitalClockComponent implements OnInit {
  public hour: any;
  public minute: string = '';
  public second: string = '';
  public ampm: string = '';
  public city: string = '';

  @Input() timeDifference: any;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours() + this.timeDifference);
      console.log(date.getHours());

      this.updateDate(date);
    }, 1000);
  }
  updateDate(date: any) {
    this.hour = date.getHours();
    const minutes = date.getMinutes();
    this.minute = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  }
}
