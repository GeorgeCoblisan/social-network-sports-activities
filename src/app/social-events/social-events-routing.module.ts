import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateEventComponent } from './create-event/create-event.component';
import { Discover } from './discover/discover.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventForumComponent } from './event-forum/event-forum.component';
import { EventsActivityComponent } from './events-activity/events-activity.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { EventsFeedComponent } from './events-feed/events-feed.component';
import { EventsHomePageComponent } from './events-home-page/events-home-page.component';
import { EventsJoinComponent } from './events-join/events-join.component';
import { EventsMapComponent } from './events-map/events-map.component';
import { EventsRewardComponent } from './events-reward/events-reward.component';
import { EventsSearchComponent } from './events-search/events-search.component';
import { SelectCategory } from './selectCategory/selectCategory.component';


const routes: Routes = [
  {
    path: 'home',
    component: EventsHomePageComponent,
  },
  {
    path: 'search',
    component: EventsSearchComponent,
  },
  {
    path: 'feed',
    component: EventsFeedComponent,
  },
  {
    path: 'join',
    component: EventsJoinComponent,
  },
  {
    path: 'map',
    component: EventsMapComponent,
  },
  {
    path: 'calendar',
    component: EventsCalendarComponent,
  },
  {
    path: 'event-details',
    component: EventDetailsComponent,
  },
  {
    path: 'create-event',
    component: CreateEventComponent,
  },
  {
    path: 'reward',
    component: EventsRewardComponent,
  },
  {
    path: 'activity',
    component: EventsActivityComponent,
  },
  {
    path: 'event-forum',
    component: EventForumComponent,
  },
  {
    path: 'select-category',
    component: SelectCategory,
  },
  {
    path: 'discover',
    component: Discover,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialEventsRoutingModule {}
