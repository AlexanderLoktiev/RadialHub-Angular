/// <reference path="../../node_modules/@types/googlemaps/index.d.ts"/>
import set = Reflect.set;

declare const google;

export class HTMLMapMarker extends google.maps.OverlayView {
    constructor(opt) {
        super();
        this.options = opt;
        this.lat = opt.lat;
        this.lng = opt.lng;
        this.likes = opt.likes,
        this.pos = new google.maps.LatLng(this.lat, this.lng);
        this.htmlElement = document.createElement('div');
        this.setMap(opt.map);
    }

    draw() {
        const panes = this.getPanes();
        panes.overlayImage.appendChild(this.htmlElement);

        this.createDomElement();
        this.fillProgressBar();
        this.placeMarker();
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

    private fillProgressBar() {
        const diametr = this.getDiametr();
        const circumference = Math.PI * diametr;
        const svg = this.htmlElement.querySelector('svg');

        svg.querySelector('#bar').style.strokeDasharray = circumference;
        svg.querySelector('#bar').style.strokeDashoffset = circumference * (1 - this.likes / 100);
    }

    private getDiametr() {
        const svg = this.htmlElement.querySelector('svg');

        if (svg && parseInt(svg.getAttribute('width'), 10)) {
            return (parseInt(svg.getAttribute('width'), 10));
        }
    }

    private placeMarker() {
        const points = this.getProjection().fromLatLngToDivPixel(this.pos);

        if (points) {
            this.htmlElement.style.position = 'absolute';
            this.htmlElement.style.left = `${points.x}px`;
            this.htmlElement.style.top = `${points.y}px`;
        }
    }

    private createDomElement() {
        if (this.options.htmlEl) {
            this.htmlElement.innerHTML = this.options.htmlEl;
            this.htmlElement.classList = ['marker-wrap'];
        }
    }
}
