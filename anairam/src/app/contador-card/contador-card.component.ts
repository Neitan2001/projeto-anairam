import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-card',
  templateUrl: './contador-card.component.html',
  styleUrls: ['./contador-card.component.css']
})
export class ContadorCardComponent implements OnInit {

  @Input() numero: number = 0;
  @Input() rotulo: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
