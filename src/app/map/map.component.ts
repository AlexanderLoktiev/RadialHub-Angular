import {Component, ElementRef, OnInit} from '@angular/core';
import {HTMLMapMarker} from '../htmlmap-marker';
/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts"/>
/// <reference path="../../../node_modules/@types/markerclustererplus/index.d.ts"/>
declare const google, MarkerClusterer;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

    public map: any;

    constructor(public el: ElementRef) {
    }

    toDataURL(url) {
        fetch(url)
            .then(response => response.blob())
            .then(blob => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            }));
    }

    ngOnInit() {
        this.map = this.el.nativeElement.querySelector('#map');

        const users = [{lat: 52.243524, lng: 20.960292}, {lat: 52.233411, lng: 21.150191}, {lat: 52.282507, lng: 20.935849}];

        if (this.map && google) {

            const map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng(52.2297, 21.0122),
                zoom: 11
            });

            console.log(this.toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0'));

            const markers = users.map((user) => {
                const marker = new HTMLMapMarker({
                    map: map,
                    lat: user.lat,
                    lng: user.lng,
                    htmlEl: '<svg width="72px" height="72px" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                        '    <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->\n' +
                        '    <title>avatar-image</title>\n' +
                        '    <desc>Created with Sketch.</desc>\n' +
                        '    <defs>\n' +
                        '        <pattern id="pattern-1" patternUnits="objectBoundingBox" x="0%" width="100%" height="100%">\n' +
                        '            <use xlink:href="#image-2" transform="scale(0.117818182,0.117818182)"></use>\n' +
                        '        </pattern>\n' +
                        '        <image id="image-2" width="500" height="500" xlink:href="https://picsum.photos/id/1027/500/500"></image>\n' +
                        '    </defs>\n' +
                        '    <g id="Desktop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                        '        <g id="home" transform="translate(-150.000000, -343.000000)">\n' +
                        '            <g id="Group-2" transform="translate(135.000000, 287.000000)">\n' +
                        '                <g id="Group-6-Copy-6" transform="translate(0.000000, 56.000000)">\n' +
                        '                    <g id="avatar-image" transform="translate(15.000000, 0.000000)">\n' +
                        '                        <circle id="outline" stroke="#E4E9EE" fill="#FFFFFF" cx="36" cy="36" r="35.5"></circle>\n' +
                        '                        <circle id="bar" stroke="#1F8DFB" stroke-width="2" cx="36" cy="36" r="35"></circle>\n' +
                        '                        <circle id="photo" fill="url(#pattern-1)" cx="36" cy="36" r="29.4545455"></circle>\n' +
                        '                    </g>\n' +
                        '                </g>\n' +
                        '            </g>\n' +
                        '        </g>\n' +
                        '    </g>\n' +
                        '</svg>'
                });
                return marker;
            });

            const markerCluster = new MarkerClusterer(map, markers, {
                styles: [{
                    textColor: 'white',
                    url: 'https://i.ibb.co/L9KFjht/avatar-without.png',
                    height: 72,
                    width: 72
                }]
            });
        }
    }
}
