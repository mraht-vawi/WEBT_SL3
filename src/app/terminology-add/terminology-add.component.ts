import { Component, OnInit } from '@angular/core';
import { TerminologyService } from '../shared/terminology.service';
import { Terminology } from '../shared/terminology';
import { Eintrag } from '@angular/common';

@Component({
  selector: 'app-terminology-add',
  templateUrl: './terminology-add.component.html',
  styleUrls: ['./terminology-add.component.css']
})
export class TerminologyAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
