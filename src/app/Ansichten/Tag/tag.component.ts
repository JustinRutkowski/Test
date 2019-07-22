import { Component, OnInit, AfterViewInit } from '@angular/core';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements AfterViewInit{

  title = 'test';

  ngAfterViewInit() {
    // weist dem Input die aktuelle Woche zu
    var current: HTMLInputElement = <HTMLInputElement>document.getElementById('datePicker');
    current.valueAsDate = new Date();
  }

  next(InputWeek: HTMLInputElement){ 
    var week = InputWeek.value;
    var weekVal = parseInt(week.split('W')[1]) + 1;
    week = week.split('W')[0] + 'W' + weekVal
    InputWeek.value = week;
  }

  prev(InputWeek: HTMLInputElement){
    var week = InputWeek.value;
    var weekVal = parseInt(week.split('W')[1]) - 1;
    week = week.split('W')[0] + 'W' + weekVal
    InputWeek.value = week;
  }

}

