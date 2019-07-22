import { Component } from '@angular/core';

@Component({
  selector: 'monat',
  templateUrl: './monat.component.html',
  styleUrls: ['./monat.component.css']
})
export class MonatComponent {

  ngAfterViewInit() {
    // weist dem Input die aktuelle Woche zu
    var current: HTMLInputElement = <HTMLInputElement>document.getElementById('datePicker');
    current.valueAsDate = new Date();
  }

}
