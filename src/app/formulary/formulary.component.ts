import { Component, OnInit } from '@angular/core';

import  { Address } from '../address';


@Component({
  selector: 'formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})
export class FormularyComponent implements OnInit {

	address = new Address();

  constructor() { }

  ngOnInit() {
  }

}
