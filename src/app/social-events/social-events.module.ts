import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

import { SocialEventsRoutingModule } from './social-events-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { EventsFeedComponent } from './events-feed/events-feed.component';
import { EventsJoinComponent } from './events-join/events-join.component';
import { EventsMapComponent } from './events-map/events-map.component';
import { EventsRewardComponent } from './events-reward/events-reward.component';
import { SearchBar } from './searchBar/searchBar.component';
import { Discover } from './discover/discover.component';
import { SelectCategory } from './selectCategory/selectCategory.component';
import { NavbarModule } from '../navbar/navbar.module';
import {FullCalendarModule} from "@fullcalendar/angular";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialEventsRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    NavbarModule,
    FullCalendarModule,
  ],
  declarations: [
    CreateEventComponent,
    EventsCalendarComponent,
    EventsFeedComponent,
    EventsJoinComponent,
    EventsMapComponent,
    EventsRewardComponent,
    SearchBar,
    Discover,
    SelectCategory,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CreateEventComponent,
    EventsCalendarComponent,
    EventsFeedComponent,
    EventsJoinComponent,
    EventsMapComponent,
    EventsRewardComponent,
    SearchBar,
    Discover,
    SelectCategory,
  ],
})
export class SocialEventsModule {}
