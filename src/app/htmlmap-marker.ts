/// <reference path="../../node_modules/@types/googlemaps/index.d.ts"/>
import set = Reflect.set;

declare const google;

export class HTMLMapMarker extends google.maps.OverlayView {
    constructor(opt) {
        super();
        this.options = opt;
        this.lat = opt.lat;
        this.lng = opt.lng;
        this.pos = new google.maps.LatLng(this.lat, this.lng);
        this.htmlElement = document.createElement('div');
        this.setMap(opt.map);
    }

    draw() {
        if (this.options.htmlEl) {
            this.htmlElement.innerHTML = this.options.htmlEl;
            this.htmlElement.classList = ['marker-wrap'];
        }

        const panes = this.getPanes();
        panes.overlayImage.appendChild(this.htmlElement);

        const points = this.getProjection().fromLatLngToDivPixel(this.pos);


        if (points) {
            this.htmlElement.style.position = 'absolute';
            this.htmlElement.style.left = `${points.x}px`;
            this.htmlElement.style.top = `${points.y}px`;
        }

        google.maps.event.addDomListener(this.options.map, 'zoom_changed', () => {
            // console.dir(panes.overlayImage);
        });
    }

    getPosition() {
        return this.pos;
    }

    remove() {
        if (this.htmlElement) {
            this.htmlElement.parentElement.removeChild(this.htmlElement);
        }
    }

    getDraggable() {
        return false;
    }
}
