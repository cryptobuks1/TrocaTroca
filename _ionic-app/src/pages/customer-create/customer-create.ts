import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerHttpProvider} from "../../providers/customer-http/customer-http";
import {MainPage} from "../main/main";

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
    photoPreview;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private formBuilder: FormBuilder,
        private  customerHttp: CustomerHttpProvider,
        private loadingCtrl: LoadingController
    ) {
        this.form = this.formBuilder.group({
            username: ['', [Validators.required, Validators.maxLength(30)]],
            email: ['', [Validators.required, Validators.email]],
            photo: null
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CustomerCreatePage');
    }

    submit() {
        const loader = this.loadingCtrl.create({
            content: 'Carregando..'
        });
        loader.present();
        this.customerHttp.create(this.form.value)
            .subscribe(() => {
                loader.dismiss();
                this.navCtrl.setRoot(MainPage);
            }, (error) => {
                console.log(error);
                loader.dismiss();
            });
    }

    selectPhoto() {
        const nativeElement = this.inputFilePhoto.getElementRef().nativeElement;
        const inputFile = nativeElement.querySelector('input');
        inputFile.click();
    }

    onChoosePhoto(files: FileList) {
        if (!files.length) {
            return;
        }
        this.makePhotoPreview(files[0]);
        this.form.get('photo').setValue(files[0]);
    }

    makePhotoPreview(file: File) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (event: ProgressEvent) => {
            const target = event.target;
            this.photoPreview = (<any>target).result;
        }
    }

}
