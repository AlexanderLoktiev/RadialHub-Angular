import {Component, ElementRef, OnInit} from '@angular/core';
/// <reference path="../../node_modules/@types/googlemaps/index.d.ts"/>
declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  public map: any;
  constructor(public el: ElementRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.map = this.el.nativeElement.querySelector('#map');

      if (this.map) {
        const map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    },100);
  }
}
