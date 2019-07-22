import { Component } from '@angular/core';

@Component({
  selector: 'woche',
  templateUrl: './woche.component.html',
  styleUrls: ['./woche.component.css']
})
export class WocheComponent {

  ngAfterViewInit() {
    // weist dem Input die aktuelle Woche zu
    var current: HTMLInputElement = <HTMLInputElement>document.getElementById('datePicker');
    current.valueAsDate = new Date();
  }
}
