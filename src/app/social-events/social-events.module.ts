import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SocialEventsRoutingModule } from './social-events-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsActivityComponent } from './events-activity/events-activity.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { EventsFeedComponent } from './events-feed/events-feed.component';
import { EventsHomePageComponent } from './events-home-page/events-home-page.component';
import { EventsJoinComponent } from './events-join/events-join.component';
import { EventsMapComponent } from './events-map/events-map.component';
import { EventsRewardComponent } from './events-reward/events-reward.component';
import { EventsSearchComponent } from './events-search/events-search.component';
import { EventForumComponent } from './event-forum/event-forum.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SocialEventsRoutingModule],
  declarations: [
    CreateEventComponent,
    EventDetailsComponent,
    EventsActivityComponent,
    EventsCalendarComponent,
    EventsFeedComponent,
    EventsHomePageComponent,
    EventsJoinComponent,
    EventsMapComponent,
    EventsRewardComponent,
    EventsSearchComponent,
    EventForumComponent,
  ],
  exports: [
    CreateEventComponent,
    EventDetailsComponent,
    EventsActivityComponent,
    EventsCalendarComponent,
    EventsFeedComponent,
    EventsHomePageComponent,
    EventsJoinComponent,
    EventsMapComponent,
    EventsRewardComponent,
    EventsSearchComponent,
    EventForumComponent,
  ],
})
export class SocialEventsModule {}
