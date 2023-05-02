import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { faEnvelope, faCircle, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faFacebook, faInstagram, faTwitter, faMastodon } from '@fortawesome/free-brands-svg-icons';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faEnvelope = faEnvelope;
  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;
  faCircle = faCircle;
  faDiscord = faDiscord;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faMastodon = faMastodon;

  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 18,
    center: new Leaflet.LatLng(50.8346058, 12.9397345)
  };

  constructor(private viewportScroller: ViewportScroller) {

  }

  ngOnInit(): void {
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  public openUrl(url: string): void {
    window.open(url);
  }
}

export const getLayers = (): Leaflet.Layer[] => {
  return [
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
  ] as Leaflet.Layer[];
};
