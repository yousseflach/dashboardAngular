import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bulletinpage',
  templateUrl: './bulletinpage.component.html',
  styleUrls: ['./bulletinpage.component.css']
})
export class BulletinpageComponent {
  constructor() {
    this.scrollToElement();

   }

  ngOnInit(): void {
    this.scrollToElement();
  }

  scrollToElement() {
    const element = document.getElementById('target-element');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
