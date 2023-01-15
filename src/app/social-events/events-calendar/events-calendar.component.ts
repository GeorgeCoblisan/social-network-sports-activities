import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";

import dayGridPlugin from '@fullcalendar/daygrid';
import {FullCalendarComponent} from "@fullcalendar/angular";
import {EventService} from "../services/event.service";
import {ev} from "@fullcalendar/core/internal-common";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.scss'],
})
export class EventsCalendarComponent implements OnInit, AfterViewInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    eventClick: this.handleEvent.bind(this)
  };

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  constructor(private readonly eventService: EventService,
              private readonly alertController: AlertController,
              private readonly router: Router) {
  }

  ngOnInit() {
    this.calendarOptions.events = this.eventService.getAll().map(event => {
      return {id: event.id.toString(), title: event.name, date: event.date}
    })
  }

  ngAfterViewInit(): void {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }

  async handleEvent(arg: any) {
    console.log(arg);
    const alert = await this.alertController.create({
      header: 'Event desc, Wanna join?',
      message: arg.event.title,
      buttons: [{
        text: 'OK',
        handler: () => {
          alert.dismiss().then(() => this.router
            .navigate(['/events/join'], {queryParams: {id: arg.event.id}}));
          return false;
        }
      }],
    });

    await alert.present();
  }
}
