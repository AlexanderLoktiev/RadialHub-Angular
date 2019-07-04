import {Component, ElementRef, OnInit} from '@angular/core';
import {HTMLMapMarker} from '../htmlmap-marker';
import {User} from '../user';

/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts"/>
/// <reference path="../../../node_modules/@types/markerclustererplus/index.d.ts"/>

declare const MarkerClusterer;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
    public map: any;
    public users: Array<User>;

    constructor(public el: ElementRef) {
    }

    ngOnInit() {
        this.map = this.el.nativeElement.querySelector('#map');
        this.users = [{lat: 52.243524, lng: 20.960292, photo: 'https://picsum.photos/id/1005/500', id: 1, likes: 70},
            {lat: 52.233411, lng: 21.150191, photo: 'https://picsum.photos/id/1027/500', id: 2, likes: 50},
            {lat: 52.282507, lng: 20.935849, photo: 'https://picsum.photos/id/338/500', id: 3, likes: 90}];

        if (this.map && google) {
            // Map initialisation
            this.map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng(52.2297, 21.0122),
                zoom: 11
            });

            // Custom markers initialisation
            const markers = this.users.map((user) => {
                return new HTMLMapMarker({
                    map: this.map,
                    lat: user.lat,
                    lng: user.lng,
                    likes: user.likes,
                    htmlEl: `<svg width="72px" height="72px" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg
                            'xmlns:xlink="http://www.w3.org/1999/xlink">
                               <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
                               <title>avatar-image</title>
                               <desc>Created with Sketch.</desc>
                               <defs>
                                   <pattern id="pattern-${user.id}" patternUnits="objectBoundingBox" x="0%" width="100%" height="100%">
                                       <use xlink:href="#image-${user.id}" transform="scale(0.117818182,0.117818182)"></use>
                                   </pattern>
                                   <image id="image-${user.id}" width="500" height="500" xlink:href="${user.photo}"></image>
                               </defs>
                               <g id="Desktop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                   <g id="home" transform="translate(-150.000000, -343.000000)">
                                       <g id="Group-2" transform="translate(135.000000, 287.000000)">
                                           <g id="Group-6-Copy-6" transform="translate(0.000000, 56.000000)">
                                               <g id="avatar-image" transform="translate(15.000000, 0.000000)">
                                                   <circle id="outline" stroke="#E4E9EE" fill="#FFFFFF" cx="36" cy="36" r="35.5"></circle>
                                                   <circle id="bar" stroke="#1F8DFB" stroke-width="2" style="transform: rotate(-90deg);
    transform-origin: center;" + stroke-dasharray="226.1946710584651" stroke-dashoffset="135.717" cx="36" cy="36" r="35"></circle>
                                                   <circle id="photo" fill="url(#pattern-${user.id})" +
                                                    cx="36" cy="36" r="29.4545455"></circle>
                                               </g>
                                           </g>
                                       </g>
                                   </g>
                               </g>
                            '</svg>`
                });
            });

            // Cluster initialisation
            const markerCluster = new MarkerClusterer(this.map, markers, {
                styles: [{
                    textColor: 'white',
                    textSize: 18,
                    url: 'https://i.ibb.co/L9KFjht/avatar-without.png',
                    height: 72,
                    width: 72
                }]
            });
        }
    }
}
