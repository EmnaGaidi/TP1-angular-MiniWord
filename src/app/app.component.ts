import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'miniWord';
  selectedNumber: any;
  selectedColor: any;
  selectedStyle: any;
  onColorChange(input: any) {
    this.selectedColor = input.value;
    console.log(this.selectedColor);
  }
  onNumberChange(_t6: HTMLInputElement) {
    this.selectedNumber = _t6.value + 'px';
    console.log(this.selectedNumber);
  }
  onSelectedStyle(style: any) {
    this.selectedStyle = style.value;
    console.log(this.selectedStyle);
  }
}
