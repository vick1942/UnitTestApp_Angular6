import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  text = 'home page';
  quoteText = 'this text is meant to be quoted';
}
