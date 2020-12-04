import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './app-product-card.component.html',
  styleUrls: ['./app-product-card.component.scss']
})
export class AppProductCardComponent implements OnInit {

  @Input() id: number = 0;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onAdd() {
    this.add.emit({
      id: this.id
    })
  }
}
