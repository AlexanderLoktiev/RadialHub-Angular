/// <reference path="../../node_modules/@types/googlemaps/index.d.ts"/>
declare const google, args;

export class HTMLMapMarker extends google.maps.OverlayView {
    constructor(options) {
        super();
        this.setMap(options.map);
    }

    draw() {
        console.dir(this);
    }

    remove() {

    }

    getPosition() {

    }

    getDraggable() {

    }
}
