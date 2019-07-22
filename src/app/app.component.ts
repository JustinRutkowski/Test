import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  model: any = {};
  
  public options = [
  {value: "Tag", id:"Tag"},
  {value: "Wcohe", id:"Woche"},
  {value: "Monat", id:"Monat"},
]
}
