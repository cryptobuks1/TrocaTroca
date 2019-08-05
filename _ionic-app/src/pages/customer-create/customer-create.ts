import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

/**
 * Generated class for the CustomerCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-create',
  templateUrl: 'customer-create.html',
})
export class CustomerCreatePage {

    @ViewChild('inputFilePhoto')
    inputFilePhoto; TextInput;
    form: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            username: ['', [Validators.required, Validators.maxLength(30)]],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CustomerCreatePage');
    }

    submit() {

    }

    selectPhoto() {
        const nativeElement = this.inputFilePhoto.getElementRef().nativeElement;
        const inputFile = nativeElement.querySelector('input');
        inputFile.click();
    }

}
