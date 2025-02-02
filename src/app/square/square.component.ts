import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent{


  @Input() value: 'X' | 'O' | null = null;
  @Output() squareClicked = new EventEmitter<void>();

  onClick() {
    if (!this.value) {
      this.squareClicked.emit();
    }
  }
}
