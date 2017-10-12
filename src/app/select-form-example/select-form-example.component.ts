import { Component} from '@angular/core';

@Component({
  selector: 'select-form-example',
  templateUrl: './select-form-example.component.html',
  styleUrls: ['./select-form-example.component.css']
})
export class SelectFormExampleComponent {
  selectedValue: string;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
