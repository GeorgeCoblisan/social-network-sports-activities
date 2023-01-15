import {AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';

import {GoogleMap, MapGeocoder, MapGeocoderResponse, MapInfoWindow, MapMarker} from "@angular/google-maps";
import {EventService} from "../services/event.service";

@Component({
  selector: 'app-events-map',
  templateUrl: './events-map.component.html',
  styleUrls: ['./events-map.component.scss'],
})
export class EventsMapComponent implements OnInit, AfterViewInit{
  @ViewChild('search')
  public searchElementRef!: ElementRef;
  @ViewChild('myGoogleMap', {static: false})
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, {static: false})
  info!: MapInfoWindow;

  address: string | null = '';
  latitude: any = 46.773138;
  longitude: any = 23.594390;
  zoom = 12;
  maxZoom = 15;
  minZoom = 8;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
  };
  markers = [] as any;
  infoContent = '';
  redirectUrl = '/events/join';
  queryParams: any;

  constructor(private ngZone: NgZone,
              private geoCoder: MapGeocoder,
              private readonly eventService: EventService) {
  }

  ngAfterViewInit(): void {
    this.center = {
      lat: this.latitude,
      lng: this.longitude,
    };

    this.map.center = this.center;
    this.eventService.getAll().forEach(event => {
      this.markers.push({
        position: {
          lat: event.location!.latitude,
          lng: event.location!.longitude,
        },
        label: {
          color: 'blue',
          text: 'Marker label ' + (this.markers.length + 1),
        },
        title: 'Marker title ' + (this.markers.length + 1),
        info: event,
        options: {
          animation: google.maps.Animation.DROP,
        },
      })
    })

  }

  ngOnInit() {

  }

  openInfo(marker: MapMarker, content: any) {
    console.log(content)
    this.infoContent = content.info.name;
    this.queryParams = {
      id: content.info.id
    }
    this.info.open(marker)
  }
}
