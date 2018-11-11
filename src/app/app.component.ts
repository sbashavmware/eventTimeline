import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'event-timeline';

  //Mocking the data needs to be moved to a service
  timeLineData = [
    {
      "title" : "CEO Visit - Pune",
      "timeActivity" : "11:00 am - 12:00pm . Eco Tower",
      "activities" : ["Brief staff regarding escalations","Provide clarity on the tasks for the next Quarter ","Provide additional walkie talkies to the guards"],
      "dateVal" : "Oct 29"
    },
    {
      "title" : "Fire Drill",
      "timeActivity" : "11:00 am - 12:00pm . Eco Tower",
      "activities" : ["Brief staff regarding escalations","Provide clarity on the tasks for the next Quarter ","Provide additional walkie talkies to the guards"],
      "dateVal" : "Oct 30"
    },
    {
      "title" : "Security training",
      "timeActivity" : "11:00 am - 12:00pm . Eco Tower",
      "activities" : ["Brief staff regarding escalations","Provide clarity on the tasks for the next Quarter "],
      "dateVal" : "Nov 1"
    }
  ]
}
