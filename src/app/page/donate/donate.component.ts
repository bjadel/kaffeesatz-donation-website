import { Component, OnInit } from '@angular/core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;

  constructor() { }

  ngOnInit(): void {
  }

}
