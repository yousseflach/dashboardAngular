import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Utilisateur } from '../Models/utilisateur';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LeftsidebarComponent {
  toggle = document.querySelector('.toggle');
  sidebar = document.querySelector('.sidebar');
  modeSwitch = document.querySelector('.toggle-switch');
  modeText = document.querySelector('.mode-text');

  @Output() customEvent = new EventEmitter<boolean>();

  // For sidebar open/close state
  isSidebarClosed: boolean = true;

  // For dark/light mode toggle
  isDarkMode: boolean = false;

  // sidebar.component.ts
  @Input() isActive?: string;
  @Input() nbTaches: number = 0;
  utilisateur: Utilisateur = localStorage.getItem('utilisateur')
    ? JSON.parse(localStorage.getItem('utilisateur') || '{}')
    : null;

  ngOnInit(): void {
    console.log(this.utilisateur);
  }

  constructor() {}

  // Method to toggle the sidebar open/close
  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
    this.customEvent.emit(this.isSidebarClosed);
  }

  // Method to toggle dark/light mode
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  setActive(item: string) {
    this.isActive = item;
  }
}
