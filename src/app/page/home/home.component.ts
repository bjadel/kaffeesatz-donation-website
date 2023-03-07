import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { faEnvelope, faCircle, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faFacebook, faInstagram, faTwitter, faMastodon } from '@fortawesome/free-brands-svg-icons';

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
