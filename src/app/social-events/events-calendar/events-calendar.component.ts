import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.scss'],
})
export class EventsCalendarComponent implements OnInit {
  date: Date;
  maxDate: any = (new Date()).getFullYear() + 1;
  constructor() { }

  ngOnInit() {}
}
