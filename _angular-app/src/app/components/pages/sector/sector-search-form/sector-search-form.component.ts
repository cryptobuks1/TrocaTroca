import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'sector-search-form',
  templateUrl: './sector-search-form.component.html',
  styleUrls: ['./sector-search-form.component.css']
})
export class SectorSearchFormComponent implements OnInit {

  search = "";

  @Output()
  onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.onSearch.emit(this.search);
    return false;
  }

}
