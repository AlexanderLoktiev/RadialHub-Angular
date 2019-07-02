/// <reference path="../../node_modules/@types/googlemaps/index.d.ts"/>
import set = Reflect.set;

declare const google;

export class HTMLMapMarker extends google.maps.OverlayView {
    constructor(opt) {
        super();
        this.options = opt;
        this.htmlElement = document.createElement('div');
        this.setMap(opt.map);
    }

    draw() {
        if (this.options.htmlEl) {
            this.htmlElement.innerHTML = this.options.htmlEl;
        } else {
        }

        const panes = this.getPanes();
        panes.overlayImage.appendChild(this.htmlElement);

        const points = this.getProjection().fromLatLngToDivPixel(this.options.latLng);


        if (points) {
            this.htmlElement.style.position = 'absolute';
            this.htmlElement.style.left = `${points.x}px`;
            this.htmlElement.style.top = `${points.y}px`;
        }

        google.maps.event.addDomListener(this.options.map, 'zoom_changed', () => {
            setTimeout(() => {
                console.log(`${ 432 / this.options.map.getZoom()}px`);
                this.htmlElement.setAttribute('width', `${ 432 / this.options.map.getZoom()}px`);
                this.htmlElement.setAttribute('height', `${ 432 / this.options.map.getZoom()}px`);
            }, 100);
        });
    }
}
