import { Component, OnInit } from '@angular/core';
import { range } from 'lodash';

interface Person {
  key: number;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-normal-list',
  templateUrl: './normal-list.component.html',
  styleUrls: ['./normal-list.component.scss'],
})
export class NormalListComponent implements OnInit {
  listOfData: Person[] = [];

  constructor() {
    range(1000).forEach((item) => {
      this.listOfData.push({
        key: item,
        name: `Hoang ${item}`,
        age: 30,
        address: 'New York No. 1 Lake Park',
      });
    });
  }

  ngOnInit(): void {}
}
