import { Component, OnInit } from '@angular/core';
import { ASIDE_SELECT_LIST } from './aside.const';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  public asideSelectItems = ASIDE_SELECT_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
