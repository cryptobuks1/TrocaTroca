import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Sector} from "../../../../model";
import {FormGroup} from "@angular/forms";
import fieldsOptions from "./sector-fields-options";

@Component({
  selector: 'sector-form',
  templateUrl: './sector-form.component.html',
  styleUrls: ['./sector-form.component.css']
})
export class SectorFormComponent implements OnInit {

  @Input()
  form: FormGroup;

  constructor(private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.changeRef.detectChanges();
  }

  get fieldsOptions(): any {
    return fieldsOptions;
  }

}
