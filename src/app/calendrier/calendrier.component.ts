import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from 'fullcalendar';
import timeGridPlugin from '@fullcalendar/timegrid';


@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin],
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next'
      
    },
    weekends: false,
    events: [
      { title: 'event 1', date: '2024-06-03', color: '#ff0000' },
      { title: 'event 2', date: '2024-06-03', color: '#00ff00' },
      { title: 'event 3', date: '2024-06-03', color: '#0000ff' },
      { title: 'event 1', date: '2024-06-18', color: '#ff0000' },
      { title: 'event 2', date: '2024-06-18', color: '#00ff00' },
      { title: 'event 3', date: '2024-06-18', color: '#0000ff' },
    ],
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };
  

}
